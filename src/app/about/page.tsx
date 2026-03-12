"use client"

import { Box } from "@/components/ui/box"
import { CTASelector } from "@/components/ui/CTASelector"
import { ExpandingCard } from "@/components/ui/ExpandingCard"
import { Section } from "@/components/ui/section"
import { TiltCard } from "@/components/ui/TiltCard"
import { motion } from "framer-motion"
import styles from "./page.module.css"


export default function ページ名Page() {
  return (
    <main className={styles.aboutPage}>
      
      <div>
        <h1 className={`${styles.bigtext} ${styles.blue} ${styles.red} gap-6`}>
            テストお
        </h1>

      </div>

      <div className={`w-[70%] grid place-items-center`}>

        <h1 className={`lg:text-lg text-gray-600 hidden lg:block`}>
          あいうえお
        </h1>
        
      </div>

<Section title="Box1つ">
          <Box>
          <h2 className="mb-2 text-left">サブタイトル</h2>
          <p>文章</p>
         </Box>
</Section>

<Section title="Box2つ横並び">
  <div className="grid grid-cols-1 gap-4 sm:gap-8 lg:gap-12 lg:grid-cols-2">
         <Box className="mx-10 lg:mx-2">
          <h2 className="text-left">サブタイトル</h2>
          <p>サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章</p>
         </Box>
         <Box className="grid mx-10 place-items-center lg:mx-2">
          <h2 className="">サブタイトル</h2>
          <p>文章</p>
         </Box>
</div>
</Section>

<Section title="Boxいっぱい">
  <motion.div className="grid grid-cols-1 gap-2 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // 30%入ったら発火、一回だけ
      transition={{ duration: 0.5, ease: "easeOut" }}>
         <Box className="grid place-items-center">
          <h2 className="">サブタイトル</h2>
          <p>文章</p>
         </Box>
         <Box className="">
          <h2 className="text-left">サブタイトル</h2>
          <p>文章</p>
         </Box>
         <Box className="">
          <h2 className="text-right">サブタイトル</h2>
          <p>文章</p>
         </Box>
         <Box className="grid place-items-center">
          <h2 className="">サブタイトル</h2>
          <p>文章</p>
         </Box>
         <Box className="grid place-items-center">
          <h2 className="">サブタイトル</h2>
          <p>文章</p>
         </Box>
         <Box className="grid place-items-center">
          <h2 className="">サブタイトル</h2>
          <p>文章</p>
         </Box>
</motion.div>
</Section>


<ExpandingCard></ExpandingCard>
<CTASelector></CTASelector>
<TiltCard className="max-w-sm">
  <h2 className="text-lg font-semibold">季節のコース</h2>
  <p className="mt-2 text-sm text-neutral-600">
    シェフおすすめの季節の食材を使ったコースです。
  </p>
</TiltCard>


     
    </main>
  )
}