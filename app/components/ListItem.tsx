import Link from "next/link";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;

  return (
    <li key={id}>
      <Link
        href={`/posts/${id}`}
        className="block p-5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600">
          {title}
        </h3>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </Link>
    </li>
  );
}
