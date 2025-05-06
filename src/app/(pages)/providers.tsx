'use client';

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProvider } from '@/hooks/use-app';
import { Toaster } from '@/components/ui/toaster';
import { env } from '@/config/env';

export default function Providers({ children }: { children: ReactNode }) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<QueryClientProvider client={queryClient}>
				<AppProvider>{children}</AppProvider>
				<ReactQueryDevtools initialIsOpen={false} />
				<Toaster />
				<GoogleAnalytics gaId={env.NEXT_PUBLIC_GOOGLE_AD_ID} />
			</QueryClientProvider>
		</ThemeProvider>
	);
}
