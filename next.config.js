/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'api.dicebear.com'],
    },
    // Remove 'standalone' for development - use for Docker only
    // output: 'standalone',
}

module.exports = nextConfig
