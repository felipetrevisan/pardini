'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import * as pixel from '@/lib/facebook-pixel';

const FacebookPixel = ({ id }: { id: string }) => {
	const [loaded, setLoaded] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (!loaded) return;

		pixel.pageview();
	}, [pathname, loaded]);

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
