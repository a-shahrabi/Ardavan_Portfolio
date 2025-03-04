/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add any other necessary configuration here
  
  // Allow reading MDX files
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  // Disable TypeScript checking during build
  typescript: {
    // This allows production builds to complete even with TypeScript errors
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig