
"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function ExpandingCard() {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      layout
      onClick={() => setOpen((v) => !v)}
      className="cursor-pointer rounded-2xl border bg-white p-4 shadow-sm"
      transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
    >
      <motion.h2 layout className="text-lg font-semibold">
        店舗コンセプト
      </motion.h2>

      {open && (
        <motion.p
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-sm text-neutral-600"
        >
          季節の食材を使ったナチュラルな料理を、気軽に楽しめるレストランです…
        </motion.p>
      )}
    </motion.div>
  )
}
