import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Shyam
              </Link>
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 border-b-2 border-transparent hover:border-indigo-600 dark:hover:border-indigo-400 transition-all">
                Home
              </Link>
              <Link href="/posts" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 border-b-2 border-transparent hover:border-indigo-600 dark:hover:border-indigo-400 transition-all">
                Blogs
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-5 items-center">
            <a href="https://github.com/saishyam36" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/sai-shyam-sundar/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#0A66C2] dark:text-zinc-400 dark:hover:text-[#0A66C2] transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
