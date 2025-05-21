import * as App from '@/components/app';
import { ServicesItems } from './service';

export async function Services() {
	return (
		<div
			className="container h-full w-screen flex my-20"
			data-section="services"
		>
			<div className="container w-full flex flex-col gap-14">
				<App.Title variant="secondary" size="lg">
					Nossos Serviços
				</App.Title>
				<ServicesItems />
			</div>
		</div>
	);
}
