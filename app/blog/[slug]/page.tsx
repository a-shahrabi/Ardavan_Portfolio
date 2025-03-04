import { getPostBySlug, getAllPosts } from '../../actions/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { FaArrowLeft } from 'react-icons/fa';
import HoverMenu from '../../../components/HoverMenu';
import ThemeToggle from '../../../components/ui/theme-toggle';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: any }) {
  const slug = params.slug;
  const post = await getPostBySlug(slug)
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-4 py-20">
        {/* Header */}
        <header className="flex items-center justify-between mb-12 top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm py-4 px-4">
          <Link href="/">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                src="/1.jpeg"
                alt="Profile picture"
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

        <main className="space-y-8">
          {/* Back Button */}
          <Link href="/blog">
            <div className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <FaArrowLeft className="mr-2" />
              <span>Back to all posts</span>
            </div>
          </Link>

          {/* Blog Post */}
          <article>
            <div className="mb-8">
              {post.coverImage && (
                <div className="w-full h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}

              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-950 to-blue-800 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent inline-block mb-4">
                {post.title}
              </h1>

              <div className="flex items-center mb-8 text-gray-600 dark:text-gray-400">
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <MDXRemote source={post.content} />
            </div>
          </article>
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