import * as App from '@/components/app';
import { Contact } from './contact';

export default function Page() {
	return (
		<section className="relative flex flex-col min-h-full items-center justify-center">
			<App.PageHeader>Contato</App.PageHeader>
			<Contact />
		</section>
	);
}
