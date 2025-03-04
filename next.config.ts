/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  
  // Allow reading MDX files
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  typescript: {
    // production builds to complete even with TypeScript errors
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig