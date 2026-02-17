import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/posts";
import { BlogCard } from "@/components/blog-card";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero sekcija */}
      <section className="w-full bg-gradient-to-b from-muted/50 to-background border-b">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 lg:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
              Dobrodošli na moj blog
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Moje lamentacije...
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/blog">
                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
                  Pogledaj članke
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  O meni
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Najnoviji članci */}
      <section className="max-w-6xl mx-auto w-full px-6 md:px-8 py-16 md:py-20">
        <div className="flex items-end justify-between mb-10 border-b pb-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Najnoviji članci</h2>
            <p className="text-muted-foreground mt-1">Najsvježije objave iz svijeta tehnologije.</p>
          </div>
          <Link href="/blog" className="hidden sm:block">
            <Button variant="ghost" className="group">
              Vidi sve 
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => <BlogCard key={post.slug} post={post} />)
          ) : (
            <div className="col-span-full">
              <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed">
                <p className="text-muted-foreground">
                  Trenutno nema objavljenih članaka.
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-8 flex justify-center sm:hidden">
          <Link href="/blog" className="w-full">
            <Button variant="outline" className="w-full">Vidi sve članke</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
