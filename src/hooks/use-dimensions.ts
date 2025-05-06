import { useState, useEffect, MutableRefObject } from 'react';

interface Dimensions {
	width: number;
	height: number;
}

export const useDimensions = (
	ref: MutableRefObject<HTMLElement | null>,
): Dimensions => {
	const [dimensions, setDimensions] = useState<Dimensions>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const updateDimensions = () => {
			if (ref.current) {
				setDimensions({
					width: ref.current.offsetWidth,
					height: ref.current.offsetHeight,
				});
			}
		};
		updateDimensions();

		window.addEventListener('resize', updateDimensions);
		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
	}, [ref]);

	return dimensions;
};
