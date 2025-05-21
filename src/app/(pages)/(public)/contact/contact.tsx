'use client';

import { ContactForm } from '@/components/contact-form';
import { motion } from 'framer-motion';

export function Contact() {
	return (
		<motion.div
			layout
			className="container md:max-w-(--breakpoint-sm) h-full flex flex-col space-y-20 bg-white"
		>
			<div className="flex flex-col gap-10">
				<ContactForm isDrawer={false} />
			</div>
		</motion.div>
	);
}
