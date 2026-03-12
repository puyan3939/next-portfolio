"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import type { MouseEvent, ReactNode } from "react"

type TiltCardProps = {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-50, 50], [8, -8])
  const rotateY = useTransform(x, [-50, 50], [-8, 8])

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const offsetX = e.clientX - (rect.left + rect.width / 2)
    const offsetY = e.clientY - (rect.top + rect.height / 2)
    x.set(offsetX)
    y.set(offsetY)
  }

  function resetTilt() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={`
        rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-md
        transition-shadow hover:shadow-lg
        ${className}
      `}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      {children}
    </motion.div>
  )
}
