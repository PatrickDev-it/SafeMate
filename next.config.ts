import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const withPwa = withPWA({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
	register: true,
	skipWaiting: true,
});

const nextConfig: NextConfig = {
	turbopack: {
		root: __dirname,
	},
};

export default withPwa(nextConfig);
