import { About as AboutComponent } from '@/components/sections/about';
import { Faq as FaqComponent } from '@/components/sections/faq';
import { Home as HomeComponent } from '@/components/sections/home';
import { Services as ServicesComponent } from '@/components/sections/services';
import { Testimonials as TestimonialsComponent } from '@/components/sections/testimonials';
import type { Site } from '@/types/site';
import { Fragment } from 'react';

export default function Home({ featured }: Site) {
	return (
		<Fragment>
			<section
				data-section="home"
				className="section relative flex items-center justify-center"
			>
				<HomeComponent images={featured ?? []} />
			</section>
			<section
				data-section="about"
				className="section relative flex min-h-full items-center justify-center bg-white rounded-t-3xl z-1 -mt-24"
			>
				<AboutComponent />
			</section>
			<section
				data-section="services"
				className="section relative flex min-h-full items-center justify-center bg-pattern bg-cover bg-no-repeat bg-white"
			>
				<ServicesComponent />
			</section>
			<section
				data-section="testimonials"
				className="section relative flex min-h-full items-center justify-center bg-white"
			>
				<TestimonialsComponent />
			</section>
			<section
				data-section="faqs"
				className="section relative flex min-h-full items-center justify-center bg-white bg-faq lg:bg-faq-blend lg:bg-blend-multiply lg:bg-size-[cover,50vw] xl:bg-size-[cover,50vw] lg:bg-position-y-center-center lg:bg-repeat-no-repeat"
			>
				<FaqComponent />
			</section>
		</Fragment>
	);
}
