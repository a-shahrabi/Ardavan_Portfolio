'use server'

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Create the posts directory if it doesn't exist
try {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    
    // Create a sample post if the directory was just created
    const samplePostPath = path.join(postsDirectory, 'first-post.mdx');
    const samplePostContent = `---
title: "My First Blog Post"
date: "2024-03-01"
excerpt: "This is my first blog post, where I share my thoughts on web development and technology."
tags: ["Web Development", "Next.js", "Personal"]
---

# My First Blog Post

Welcome to my blog! This is my first post, and I'm excited to share my thoughts and experiences with you.

## What I'll be writing about

In this blog, I plan to write about:

- Web development tips and tricks
- My experiences with new technologies
- Project case studies
- Career advice for developers

## A bit about me

I'm a software developer with a passion for building clean, efficient, and user-friendly applications. I love working with modern technologies like React, Next.js, and TypeScript.`;
    
    fs.writeFileSync(samplePostPath, samplePostContent);
  }
} catch (error) {
  console.error("Error creating posts directory:", error);
}

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

export async function getPostSlugs() {
  try {
    return fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error("Error reading post directory:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      slug: realSlug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      content: content,
      readingTime: `${readingTime} min read`,
      tags: data.tags || [],
      coverImage: data.coverImage,
    };
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = await getPostSlugs();
  const postsPromises = slugs.map(slug => getPostBySlug(slug));
  const posts = await Promise.all(postsPromises);
  
  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}