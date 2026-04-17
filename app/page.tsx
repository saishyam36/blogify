import Posts from "./components/Posts";
import ProfilePic from "./components/ProfilePic";

export const revalidate = 1800; // revalidate at most every 30 minutes

export default function Home() {
  return (
   <div className="flex flex-col flex-1 items-center justify-center pt-20 px-4 mb-10">
    <ProfilePic />
    <h1 className="mt-8 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 drop-shadow-md">
      Hi, I'm Shyam.
    </h1>
    <p className="mt-4 max-w-2xl text-lg text-center text-zinc-600 dark:text-zinc-400">
      Welcome to my blog where I share my thoughts, tutorials, and adventures.
    </p>
    <Posts />
   </div>
  );
}
