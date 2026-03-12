// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import { PageTransition } from "@/components/ui/PageTransition"

export const metadata: Metadata = {
  title: "デモサイト",
  description: "Next + Framer Motion トランジション",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
