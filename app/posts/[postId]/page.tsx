import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

// Optional: Generates static routes at build time
export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  const posts = getSortedPostsData();
  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const postData = await getPostData(postId);

  const formattedDate = new Date(postData.date).toLocaleDateString("en-US", {
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
            {postData.title}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base">
            {formattedDate}
          </p>
        </header>

        {/* Prose class requires @tailwindcss/typography plugin in tailwind.config */}
        <section
          className="prose prose-zinc dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-indigo-600 dark:prose-a:text-indigo-400"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </main>
  );
}
