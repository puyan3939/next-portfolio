// app/_components/PageTransition.tsx
"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

type PageTransitionProps = {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <div className="relative min-h-dvh overflow-hidden">
      {/* ✅ 黒いカバー（ここが「覆って左へ抜けて消える」やつ） */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname + "-overlay"}
          className="pointer-events-none fixed inset-0 z-[9999] bg-black"
          // 右の外から…
          initial={{ x: "100%" }}
          // 右 → 中央 → 左の外 へスライド
          animate={{ x: ["100%", "0%", "-100%"] }}
          transition={{
            duration: 0.7,
            times: [0, 0.4, 1],
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      </AnimatePresence>

      {/* ✅ ページ本体（軽くフェード） */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="min-h-dvh"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
