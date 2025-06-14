import type { icons } from 'lucide-react';
import type { PortableTextBlock } from 'sanity';

export type Service = {
	id: string;
	title: string;
	icon: keyof typeof icons;
	type: keyof typeof ServiceType;
	excerpt: string;
	description: PortableTextBlock[];
	buttons: ServiceButton;
};

type ServiceButton = {
	hasSeeMoreButton?: boolean;
	linkSeeMore?: string;
	hasWhatsappButton?: boolean;
	whatsappButtonLabel?: keyof typeof WhatsappButtonLabel;
	linkWhatsappButton?: string;
};

export enum WhatsappButtonLabel {
	TALK_WITH_SPECIALIST = 'Fale com um especialista',
	MORE_INFORMATION = 'Saiba mais',
	GET_QUOTE = 'Solicite um orçamento',
}

export enum ServiceType {
	HAVING = 'HAVING',
	NOT_HAVING = 'NOT_HAVING',
}
