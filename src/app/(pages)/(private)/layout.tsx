import type { Metadata } from 'next';
import '../../globals.scss';

export async function generateMetadata(): Promise<Metadata> {
	return {
		robots: {
			index: false,
			follow: false,
		},
	};
}

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return children;
}
