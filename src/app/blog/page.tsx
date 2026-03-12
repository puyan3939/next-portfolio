// app/blog/page.tsx
import Link from "next/link"
import { fetchPosts } from "@/lib/wp"

export default async function BlogPage() {
  const posts = await fetchPosts()

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1>ブログ</h1>
      <ul className="mt-6 space-y-4">
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/blog/${p.slug}`} className="text-blue-600 underline">
              {p.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
