import { getPostsMeta } from "@/lib/posts";
import ListItem from "@/app/components/ListItem";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 1800; // revalidate at most every 30 minutes

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();
  if (!posts) return [];

  const tags = new Set(posts.flatMap((post) => post.tags));
  return Array.from(tags).map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props) {
  const { tag } = await params;
  return {
    title: `Posts tagged: #${tag}`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const posts = await getPostsMeta();

  if (!posts) return notFound();

  const filtered = posts.filter((post) => post.tags.includes(tag));

  if (filtered.length === 0) return notFound();

  return (
    <main className="px-4 pt-24 pb-12 w-full max-w-3xl mx-auto flex-1">
      <Link
        href="/"
        className="inline-block mb-8 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors"
      >
        &larr; Back to Home
      </Link>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight mb-2">
        #{tag}
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8 text-sm">
        {filtered.length} {filtered.length === 1 ? "post" : "posts"}
      </p>

      <ul className="flex flex-col gap-4">
        {filtered.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </main>
  );
}
