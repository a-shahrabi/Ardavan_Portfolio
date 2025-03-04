import { getAllPosts } from '../actions/blog';
import BlogCard from '../../components/BlogCards';
import HoverMenu from '../../components/HoverMenu';
import ThemeToggle from '../../components/ui/theme-toggle';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

async function BlogPosts() {
  const posts = await getAllPosts();
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))
      ) : (
        <p>No blog posts found. Check back soon!</p>
      )}
    </section>
  );
}

export default async function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 py-20">
        {/* Header */}
        <header className="flex items-center justify-between mb-12 top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm py-4 px-4">
          <Link href="/">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                src="/1.jpeg"
                alt="Profile picture of Ardavan Shahrabi"
                className="cursor-pointer transition-all duration-300 hover:scale-110"
                width={100}
                height={100}
                priority
                quality={90}
              />
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <HoverMenu />
            <div className="cursor-pointer">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="space-y-10">
          {/* Blog Header */}
          <section>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-950 to-blue-800 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent inline-block mb-6">
              Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Here I share my thoughts on software development, technology, and more. From coding tips to career advice, these are my personal insights from my journey as a developer.
            </p>
          </section>

          {/* Blog Posts Grid */}
          <Suspense fallback={<div>Loading blog posts...</div>}>
            <BlogPosts />
          </Suspense>
        </main>

        <footer className="mt-20 pb-8">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © 2024 Ardavan Shahrabi. Built with Next.js, TailwindCSS and Framer motion. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}