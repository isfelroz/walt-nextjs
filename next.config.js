/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: process.env.WORDPRESS_DOMAIN,
				port: '',
				pathname: '/**',
			},
		],
	},
}

module.exports = nextConfig
