import Posts from "../components/Posts";

export const revalidate = 1800; // revalidate at most every 30 minutes

export default function PostsPage() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center pt-10 px-4 mb-10">
      <Posts />
    </main>
  );
}
