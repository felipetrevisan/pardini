import { Button } from '@/components/ui/button';
import { HighlightIcon, MenuIcon } from '@sanity/icons';
import { defineArrayMember, defineType } from 'sanity';

export default defineType({
	title: 'Block Content',
	name: 'blockContent',
	type: 'array',
	of: [
		defineArrayMember({
			title: 'Block',
			type: 'block',
			styles: [
				{ title: 'Normal', value: 'normal' },
				{ title: 'H1', value: 'h1' },
				{ title: 'H2', value: 'h2' },
				{ title: 'H3', value: 'h3' },
				{ title: 'H4', value: 'h4' },
				{ title: 'Quote', value: 'blockquote' },
			],
			lists: [{ title: 'Bullet', value: 'bullet' }],
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
					{
						title: 'Highlight',
						value: 'highlight',
						icon: HighlightIcon,
						component: (props) => (
							<span className="selection:bg-primary selection:text-primary-foreground">
								{props.children}
							</span>
						),
					},
				],
				annotations: [
					{
						title: 'URL',
						name: 'link',
						type: 'object',
						fields: [
							{
								title: 'URL',
								name: 'href',
								type: 'url',
							},
						],
					},
					{
						title: 'Button',
						name: 'button',
						type: 'object',
						icon: MenuIcon,
						fields: [
							{
								title: 'URL',
								name: 'href',
								type: 'url',
							},
							{
								title: 'Variant Apperance',
								name: 'variant',
								type: 'string',
								options: {
									list: [
										{ title: 'Default', value: 'default' },
										{ title: 'Secondary', value: 'secondary' },
										{ title: 'Outline', value: 'outline' },
										{ title: 'Ghost', value: 'ghost' },
										{ title: 'Link', value: 'link' },
										{ title: 'Whatsapp', value: 'whatsapp' },
									],
								},
							},
							{
								title: 'Size',
								name: 'size',
								type: 'string',
								options: {
									list: [
										{ title: 'Default', value: 'default' },
										{ title: 'Small', value: 'sm' },
										{ title: 'Large', value: 'lg' },
										{ title: 'Extra Large', value: 'xl' },
										{ title: 'Extra Large (2)', value: '2xl' },
									],
								},
							},
							{
								title: 'Rounded Border',
								name: 'rounded',
								type: 'string',
								options: {
									list: [
										{ title: 'None', value: 'none' },
										{ title: 'Full', value: 'full' },
										{ title: 'Large', value: 'lg' },
										{ title: 'Extra Large', value: 'xl' },
										{ title: 'Extra Large (2)', value: '2xl' },
									],
								},
							},
						],
						components: {
							// biome-ignore lint/suspicious/noExplicitAny: <explanation>
							annotation: (props: any) => (
								<Button
									variant={props.variant ?? 'default'}
									size={props.size ?? 'default'}
									rounded={props.rounded ?? 'none'}
								>
									{props.children}
								</Button>
							),
						},
					},
				],
			},
		}),
		defineArrayMember({
			type: 'image',
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
				},
			],
		}),
	],
});
