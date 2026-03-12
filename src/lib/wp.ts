// lib/wp.ts
export const WP_BASE = process.env.WP_BASE!  // .env.local に入れておく

export type WpPost = {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  date: string
}

export async function fetchPosts(): Promise<WpPost[]> {
  const res = await fetch(`${WP_BASE}/posts?_fields=id,slug,title,content,date`, {
    next: { revalidate: 60 }, // ISR: 60秒ごとに再検証
  })
  if (!res.ok) throw new Error("Failed to fetch posts")
  return res.json()
}

export async function fetchPostBySlug(slug: string): Promise<WpPost | null> {
  const res = await fetch(
    `${WP_BASE}/posts?slug=${encodeURIComponent(slug)}&_fields=id,slug,title,content,date`,
    { next: { revalidate: 60 } },
  )
  if (!res.ok) throw new Error("Failed to fetch post")
  const data: WpPost[] = await res.json()
  return data[0] ?? null
}
