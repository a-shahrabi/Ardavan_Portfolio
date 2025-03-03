import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static paths at build time
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'blogposts');
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames.map(filename => ({
    slug: filename.replace('.mdx', '')
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'blogposts', `${slug}.mdx`);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return notFound();
  }
  
  // Get file content
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{new Date(data.date).toLocaleDateString()}</p>
        </div>
        
        <article className="prose prose-blue dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </article>
        
        <div className="mt-12">
          <Link 
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}