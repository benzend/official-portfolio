'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type IRevealMargin = `${number}px` | `${number}px ${number}px ${number}px ${number}px`

interface IScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  distance?: number
  margin?: IRevealMargin
}

export function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 50,
  margin = '200px',
}: IScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin })
  const controls = useAnimation()
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      controls.set('visible')
      return
    }
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls, reduceMotion])

  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }

    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        }
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 },
        }
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 },
        }
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 },
        }
      case 'fade':
      default:
        return baseVariants
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      animate={controls}
      variants={getVariants()}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration,
              delay,
              ease: 'easeOut',
            }
      }
    >
      {children}
    </motion.div>
  )
}
