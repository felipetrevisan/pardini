'use client';

import * as pixel from '@/lib/facebook-pixel';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';

const FacebookPixel = ({ id }: { id: string }) => {
	const [loaded, setLoaded] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (!loaded) return;

		pixel.pageview();
	}, [loaded]);

	return (
		<div>
			<Script
				id="fb-pixel"
				src="/js/pixel.js"
				strategy="afterInteractive"
				onLoad={() => setLoaded(true)}
				data-pixel-id={id}
			/>
		</div>
	);
};

export default FacebookPixel;
