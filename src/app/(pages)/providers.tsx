'use client';

import { Toaster } from '@/components/ui/toaster';
import { env } from '@/config/env';
import { AppProvider } from '@/hooks/use-app';
import { Bar } from '@bprogress/next';
import { ProgressProvider } from '@bprogress/next/app';
import { GoogleAnalytics } from '@next/third-parties/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'next-themes';
import { type ReactNode, useState } from 'react';

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
				<AppProvider>
					<ProgressProvider
						height="6px"
						options={{ showSpinner: false }}
						shallowRouting				
					>
						<Bar />
						{children}
					</ProgressProvider>
				</AppProvider>
				<ReactQueryDevtools initialIsOpen={false} />
				<Toaster />
				<GoogleAnalytics gaId={env.NEXT_PUBLIC_GOOGLE_AD_ID} />
			</QueryClientProvider>
		</ThemeProvider>
	);
}
