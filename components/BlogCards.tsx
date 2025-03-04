import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

// Define the BlogPost type
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readingTime: string;
  tags: string[];
  coverImage?: string;
};

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <div className="transform transition-all duration-300 hover:scale-105">
      <Link href={`/blog/${post.slug}`}>
        <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 cursor-pointer h-full">
          <CardContent className="p-4">
            <div className="flex flex-col h-full">
              {post.coverImage && (
                <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="flex flex-col flex-grow">
                <div className="mb-2 flex items-center space-x-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    • {post.readingTime}
                  </span>
                </div>
                <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default BlogCard;