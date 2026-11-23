// Circuit-trace background. Seeded random walk on a 24px grid, drawn once to an
// offscreen canvas. Each frame blits that bitmap and paints one pulse per trace.

export interface ICircuitBackgroundOptions {
  grid?: number
  traces?: number
  tracesSmall?: number
  seed?: number
  line?: string
  pad?: string
  pulse?: string
  pulseAlt?: string
  altEvery?: number
  pulseAlpha?: number
}

interface IResolvedCircuitOptions {
  grid: number
  traces: number
  tracesSmall: number
  seed: number
  line: string
  pad: string
  pulse: string
  pulseAlt: string
  altEvery: number
  pulseAlpha: number
}

interface IPulse {
  p: number[][]
  seg: number
  u: number
  sp: number
  alt: boolean
}

const DEFAULTS: IResolvedCircuitOptions = {
  grid: 24,
  traces: 60,
  tracesSmall: 26,
  seed: 11,
  line: 'rgba(46,242,200,.13)',
  pad: 'rgba(46,242,200,.28)',
  pulse: '46,242,200',
  pulseAlt: '255,176,32',
  altEvery: 7,
  pulseAlpha: 0.45,
}

export function initCircuitBackground(
  canvas: HTMLCanvasElement,
  opts: ICircuitBackgroundOptions = {}
): () => void {
  const o: IResolvedCircuitOptions = { ...DEFAULTS, ...opts }
  const ctx = canvas.getContext('2d')
  if (!ctx) return () => {}

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let width = 0
  let height = 0
  let offscreen: HTMLCanvasElement | null = null
  let pulses: IPulse[] = []
  let frame = 0
  let last = 0
  let resizeTimer: ReturnType<typeof setTimeout> | undefined

  const build = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    offscreen = document.createElement('canvas')
    offscreen.width = canvas.width
    offscreen.height = canvas.height
    const offscreenCtx = offscreen.getContext('2d')
    if (!offscreenCtx) return
    offscreenCtx.setTransform(dpr, 0, 0, dpr, 0, 0)

    let seed = o.seed
    const random = () => {
      seed = (seed * 16807) % 2147483647
      return seed / 2147483647
    }

    const grid = o.grid
    const count = width < 700 ? o.tracesSmall : o.traces
    const traces: number[][][] = []
    const directions = [
      [1, 0],
      [1, 1],
      [0, 1],
      [1, -1],
      [-1, 0],
      [-1, 1],
    ]

    for (let i = 0; i < count; i++) {
      let x = Math.round((random() * width) / grid) * grid
      let y = Math.round((random() * height) / grid) * grid
      let dir = random() < 0.5 ? 0 : 2
      const points = [[x, y]]
      const segments = 4 + Math.floor(random() * 4)
      for (let k = 0; k < segments; k++) {
        const len = (2 + Math.floor(random() * 7)) * grid
        const step = directions[(dir + (random() < 0.5 ? 0 : 1)) % 6]
        dir = (dir + 1) % 6
        x += step[0] * len
        y += step[1] * len
        points.push([x, y])
      }
      traces.push(points)
    }

    offscreenCtx.lineWidth = 1
    offscreenCtx.strokeStyle = o.line
    offscreenCtx.fillStyle = o.pad
    for (const points of traces) {
      offscreenCtx.beginPath()
      offscreenCtx.moveTo(points[0][0], points[0][1])
      for (const point of points.slice(1)) offscreenCtx.lineTo(point[0], point[1])
      offscreenCtx.stroke()
      for (const point of [points[0], points[points.length - 1]]) {
        offscreenCtx.beginPath()
        offscreenCtx.arc(point[0], point[1], 2.2, 0, Math.PI * 2)
        offscreenCtx.fill()
      }
    }

    pulses = traces.map((points, index) => ({
      p: points,
      seg: 0,
      u: random(),
      sp: 0.006 + random() * 0.012,
      alt: index % o.altEvery === 0,
    }))
  }

  const draw = (dt: number) => {
    if (!offscreen) return
    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(offscreen, 0, 0, width, height)
    for (const pulse of pulses) {
      const start = pulse.p[pulse.seg]
      const end = pulse.p[pulse.seg + 1]
      if (!start || !end) {
        pulse.seg = 0
        pulse.u = 0
        continue
      }
      const x = start[0] + (end[0] - start[0]) * pulse.u
      const y = start[1] + (end[1] - start[1]) * pulse.u
      const color = pulse.alt ? o.pulseAlt : o.pulse
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 10)
      gradient.addColorStop(0, `rgba(${color},${o.pulseAlpha})`)
      gradient.addColorStop(1, `rgba(${color},0)`)
      ctx.fillStyle = gradient
      ctx.fillRect(x - 10, y - 10, 20, 20)
      pulse.u += pulse.sp * dt
      if (pulse.u >= 1) {
        pulse.u = 0
        pulse.seg++
        if (pulse.seg >= pulse.p.length - 1) pulse.seg = 0
      }
    }
  }

  const loop = (timestamp: number) => {
    const dt = Math.min(3, last ? (timestamp - last) / 16.7 : 1)
    last = timestamp
    draw(dt)
    frame = requestAnimationFrame(loop)
  }

  const start = () => {
    cancelAnimationFrame(frame)
    last = 0
    if (reduceMotion.matches) draw(0)
    else frame = requestAnimationFrame(loop)
  }

  const onResize = () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      build()
      start()
    }, 150)
  }

  const onVisibility = () => {
    if (document.hidden) cancelAnimationFrame(frame)
    else start()
  }

  window.addEventListener('resize', onResize)
  document.addEventListener('visibilitychange', onVisibility)
  reduceMotion.addEventListener('change', start)
  build()
  start()

  return () => {
    cancelAnimationFrame(frame)
    clearTimeout(resizeTimer)
    window.removeEventListener('resize', onResize)
    document.removeEventListener('visibilitychange', onVisibility)
    reduceMotion.removeEventListener('change', start)
  }
}
