export default defineConfig({
	site: 'https://lucentix.github.io',
	base: '/docs',
	integrations: [
	  starlight({
		title: 'My Docs',
		social: {
		  github: 'https://github.com/withastro/starlight',
		},
		sidebar: [
		  {
			label: 'Guides',
			items: [
			  { label: 'Example Guide', slug: 'guides/example' },
			],
		  },
		  {
			label: 'Reference',
			autogenerate: { directory: 'reference' },
		  },
		],
	  }),
	],
	images: {
	  service: 'pass-through',
	},
  });
  