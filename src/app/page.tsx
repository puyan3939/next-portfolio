import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Box } from "@/components/ui/box"
import Link  from "next/link"

export default function Page() {
  return (
    <main className="grid min-h-screen p-6 place-items-center">
      <div className="grid w-full max-w-md gap-6">
        <Button>Primary ボタン</Button>
        <Button variant="outline">Outline ボタン</Button>
        <Card>
          <CardHeader>
            <CardTitle>カードタイトル</CardTitle>
          </CardHeader>
          <CardContent>
            ここに本文。色や角丸は <code>globals.css</code> の変数で一括調整できます。
          </CardContent>
        </Card>
        
        <Link href="/about">
         <Box>
          about
         </Box>
         </Link>
          <Link href="/blog">
         <Box>
          blog
         </Box>
         </Link>
      </div>
    </main>
  )
}
