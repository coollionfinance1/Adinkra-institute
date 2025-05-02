/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    async rewrites() {
        return [
            {
                source: '/adba/:path*',
                destination: 'https://adinkra-institute-murex.vercel.app/:path*',
            },
        ];
    },
};
  
module.exports = nextConfig;
  