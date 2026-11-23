'use client'

import { useCallback, useEffect, useRef } from 'react'

interface IGlitchNameProps {
  text: string
  className?: string
}

const COOLDOWN_MS = 1500
const GLITCH_MS = 950

/** Name heading. One-shot RGB split on load, hover, and keyboard focus. */
export default function GlitchName({ text, className = '' }: IGlitchNameProps) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const lastRun = useRef(-Infinity)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const play = useCallback(() => {
    const el = spanRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const now = performance.now()
    if (now - lastRun.current < COOLDOWN_MS) return
    lastRun.current = now
    el.classList.remove('is-glitching')
    void el.offsetWidth
    el.classList.add('is-glitching')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => el.classList.remove('is-glitching'), GLITCH_MS)
  }, [])

  useEffect(() => {
    const el = spanRef.current
    const id = requestAnimationFrame(play)
    return () => {
      cancelAnimationFrame(id)
      clearTimeout(timer.current)
      lastRun.current = -Infinity
      el?.classList.remove('is-glitching')
    }
  }, [play])

  return (
    <h1
      id="name"
      className={className ? `bs-name ${className}` : 'bs-name'}
      aria-label={text}
      onPointerEnter={play}
      onFocus={play}
    >
      <span ref={spanRef} className="bs-glitch" data-text={text} aria-hidden="true">
        {text}
      </span>
    </h1>
  )
}
