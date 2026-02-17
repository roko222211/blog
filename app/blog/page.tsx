import { getAllPosts } from "@/lib/posts"
import { BlogCard } from "@/components/blog-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Svi članci | Blog",
  description: "Ovdje možete pronaći sve moje članke o tehnologiji, financijama i razvoju softvera.",
  openGraph: {
    title: "Svi članci | Blog",
    description: "Članci o tehnologiji, financijama i razvoju softvera.",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
      <div className="space-y-12">
        <header className="select-text">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Svi članci</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Ovdje možete pronaći sve moje članke o tehnologiji, financijama i razvoju.
          </p>
        </header>

        {posts.length > 0 ? (
          <section 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="Blog posts"
          >
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </section>
        ) : (
          <div className="text-center py-20" role="status">
            <div className="inline-block px-8 py-12 bg-muted/20 rounded-xl border border-dashed select-text">
              <p className="text-muted-foreground">
                Trenutno nema objavljenih članaka.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
