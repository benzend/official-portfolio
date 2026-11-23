'use client'

import { useEffect, useRef } from 'react'

import { initCircuitBackground } from '@/app/lib/circuit-bg'

/** Fixed, decorative circuit-trace canvas, scanlines, and cursor glow. */
export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    return initCircuitBackground(canvas)
  }, [])

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(pointer: fine)')
    let frame = 0

    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`
        glow.classList.add('is-on')
      })
    }

    const leave = () => {
      glow.classList.remove('is-on')
    }

    const sync = () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
      if (reduceMotion.matches || !finePointer.matches) {
        glow.classList.remove('is-on')
        return
      }
      window.addEventListener('pointermove', move, { passive: true })
      document.addEventListener('pointerleave', leave)
    }

    sync()
    reduceMotion.addEventListener('change', sync)
    finePointer.addEventListener('change', sync)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
      reduceMotion.removeEventListener('change', sync)
      finePointer.removeEventListener('change', sync)
    }
  }, [])

  return (
    <>
      <div className="bs-circuit" aria-hidden="true">
        <canvas ref={canvasRef} />
      </div>
      <div className="bs-scanlines" aria-hidden="true" />
      <div className="bs-cursor-glow" ref={glowRef} aria-hidden="true" />
    </>
  )
}
