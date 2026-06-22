'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  duration?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-60px' })

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 30 : 0,
    x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

/** Stagger wrapper — wrap around a list of <ScrollReveal> children */
export function ScrollRevealGroup({
  children,
  className,
  stagger = 0.12,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  )
}

export const revealUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}
