"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const tabs = ["Eat-in", "Pick-up", "Delivery"] as const
type Tab = (typeof tabs)[number]

export function CTASelector() {
  const [active, setActive] = useState<Tab>("Eat-in")

  return (
    <div className="inline-flex items-center gap-6 rounded-full bg-neutral-900/90 px-4 py-2 text-sm text-white">
      {tabs.map((tab) => {
        const isActive = tab === active
        return (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="relative px-1 pb-1 pt-0.5"
          >
            <span className={isActive ? "font-semibold" : "text-neutral-400"}>
              {tab}
            </span>

            {isActive && (
              <motion.div
                layoutId="tab-underline"
                className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-primary"
              />
            )}
          </button>
        )
      })}
    </div>
  )
}
