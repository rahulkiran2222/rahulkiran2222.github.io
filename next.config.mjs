/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // Allows MDX support later
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default nextConfig;
