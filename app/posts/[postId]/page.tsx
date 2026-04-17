import { getPostByName, getPostsMeta } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import 'highlight.js/styles/github.css';

export const revalidate = 1800; // revalidate at most every 30 minutes

type Props = {
  params: Promise<{ postId: string }>;
};

// Optional: Generates static routes at build time
export async function generateStaticParams() {
  const posts = await getPostsMeta();
  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { postId } = await params;
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params }: Props) {
  const { postId } = await params;
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return notFound();
  }

  const formattedDate = new Date(post.meta.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="px-4 pt-24 pb-12 w-full max-w-3xl mx-auto flex-1">
      <Link
        href="/"
        className="inline-block mb-8 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors"
      >
        &larr; Back to Home
      </Link>

      <article>
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
            {post.meta.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base">
              {formattedDate}
            </p>
            {post.meta.tags && post.meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.meta.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors inline-block"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </header>

        <section className="prose prose-zinc dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-indigo-600 dark:prose-a:text-indigo-400">
          {post.content}
        </section>
      </article>
    </main>
  );
}
