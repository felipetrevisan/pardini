'use client';

import * as App from '@/components/app';

import { Fragment } from 'react';
import '../../globals.css';
import FacebookPixel from '@/components/facebook-pixel';
import { env } from '@/config/env';

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<Fragment>
			<App.Header />
			<App.Content>{children}</App.Content>
			<App.Footer />
			<FacebookPixel id={env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID} />
		</Fragment>
	);
}
