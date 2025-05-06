import {
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
} from '@/components/ui/drawer';
import { ContactForm } from './contact-form';

export function ContactFormDrawer() {
	return (
		<DrawerContent className="container max-w-3xl">
			<DrawerHeader>
				<DrawerTitle>Como podemos te ajudar?</DrawerTitle>
			</DrawerHeader>

			<ContactForm isDrawer />
		</DrawerContent>
	);
}
