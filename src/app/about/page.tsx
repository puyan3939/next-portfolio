import styles from "./page.module.css"
import { Box } from "@/components/ui/box"
import { Section } from "@/components/ui/section"

export default function ページ名Page() {
  return (
    <main className={styles.aboutPage}>
      
      <div>
        <h1 className={`${styles.bigtext} ${styles.blue} ${styles.red} gap-6`}>
            テスト
        </h1>

      </div>

      <div className={`w-[70%] grid place-items-center`}>

        <h1 className={`lg:text-lg text-gray-600 hidden lg:block`}>
          あいうえお
        </h1>
        
      </div>

<Section title="Box1つ">
          <Box>
          <h2 className="text-left mb-2">サブタイトル</h2>
          <p>文章</p>
         </Box>
</Section>

<Section title="Box2つ横並び">
  <div className="grid gap-4 sm:gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-2">
         <Box className="mx-10 lg:mx-2">
          <h2 className="text-left">サブタイトル</h2>
          <p>サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章</p>
         </Box>
         <Box className="grid place-items-center mx-10 lg:mx-2">
          <h2 className="">サブタイトル</h2>
          <p>文章</p>
         </Box>
</div>
</Section>

<Section title="Boxいっぱい">
  <div className="grid gap-2 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
</div>
</Section>

     
    </main>
  )
}