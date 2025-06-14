import * as App from '@/components/app';
import { getAboutContent } from '@/server/get-about';
import { About } from './about';

export default async function Page() {
	const content = await getAboutContent();

	return (
		<section className="relative flex flex-col min-h-full items-center justify-center">
			<App.PageHeader>Quem Somos</App.PageHeader>
			<About initialData={content} />
		</section>
	);
}
