import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: ['Applebot', 'Bingbot', 'Googlebot', 'AdsBot-Google'],
				allow: ['/'],
				disallow: '/private/',
			},
			{
				userAgent: '*',
				allow: '/',
				disallow: '/private/',
			},
		],
	};
}
