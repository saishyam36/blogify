import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="w-full max-w-2xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
        📝 Recent Posts
      </h2>
      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
