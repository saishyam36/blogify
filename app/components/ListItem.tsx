import Link from "next/link";

type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, tags } = post;

  return (
    <li key={id} className="relative block p-5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-lg transition-all duration-300 group">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600">
        <Link href={`/posts/${id}`} className="before:absolute before:inset-0 focus:outline-none">
          {title}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3 relative z-10">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="px-2 py-1 bg-zinc-100 dark:bg-zinc-700/50 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-md text-xs font-medium hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors inline-block"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
