/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    async redirects() {
        return [
            {
                source: '/adba',
                destination: 'https://adinkra-institute-murex.vercel.app',
                permanent: false,
            },
            {
                source: '/honorees',
                destination: 'https://adinkra-institute-murex.vercel.app/honorees',
                permanent: false,
            },
        ]
    },
};
  
module.exports = nextConfig;
  