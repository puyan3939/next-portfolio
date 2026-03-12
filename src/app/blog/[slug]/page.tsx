// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation"
import { fetchPostBySlug } from "@/lib/wp"

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await fetchPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <article
        className="prose mt-6"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </main>
  )
}
