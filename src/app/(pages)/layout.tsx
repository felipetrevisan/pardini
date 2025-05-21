import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import '../globals.css';
import { getSiteConfig } from '@/server/get-site-config';
import Providers from './providers';

const inter = Inter({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700'],
	variable: '--inter',
});

export async function generateMetadata(): Promise<Metadata> {
	const settings = await getSiteConfig();
	const title = settings?.title || 'Pardini Cidadania';
	const description = settings?.description || '';
	const keywords = settings?.keywords || '';

	return {
		title: {
			template: `%s | ${title}`,
			default: title,
		},
		description,
		keywords,
	};
}

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${inter.className}`} suppressHydrationWarning>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<body className="antialiased h-screen relative">
				<Providers>{children}</Providers>
				<SpeedInsights />
			</body>
		</html>
	);
}
