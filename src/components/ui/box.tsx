// app/_components/box.tsx
"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type BoxProps = {
  className?: string
  children: React.ReactNode
}

export function Box({children,  className = "" }: BoxProps) {
  return (
    
    <motion.div
    style={{
      
    }}
      className={`
        bg-primary
        text-center
        ${className}
        `}
  whileHover={{ y: -4, scale: 1.01 }}
  transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      {children}
</motion.div>

  )
  
}

