import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'SafeMate',
		short_name: 'SafeMate',
		description: 'SafeMate - rete di sicurezza e supporto femminile',
		start_url: '/',
		display: 'standalone',
		background_color: '#f6f3f4',
		theme_color: '#f8e2e6',
		orientation: 'portrait',
		lang: 'it-IT',
		categories: ['lifestyle', 'social', 'safety'],
		icons: [
			{
				src: '/icons/icon-192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'any',
			},
			{
				src: '/icons/icon-512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any',
			},
		],
	};
}
