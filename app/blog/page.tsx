
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogPage() {
  // Get all posts
  const postsDirectory = path.join(process.cwd(), 'blogposts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      slug: filename.replace('.mdx', ''),
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });
  
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-slate-950 to-blue-800 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent inline-block"
        >
          My Blog
        </motion.h1>
        
        <div className="space-y-8">
          {sortedPosts.map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-lg border border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
              >
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12">
          <Link 
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}