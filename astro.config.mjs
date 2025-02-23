import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://lucentix.github.io/docs',
  base: '/docs',
  integrations: [
    starlight({
      title: 'Lucentix Documentation',
      description: 'Documentation for Lucentix.',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Information',
          items: [
            { label: 'Welcome', slug: 'info/welcome' },
            { label: 'The Team', slug: 'info/team' },
            { label: 'Terms of Service', slug: 'info/tos' },
            { label: 'Privacy Policy', slug: 'info/pp' },
          ],
        },
      ],
    }),
  ],
  images: {
    service: 'pass-through',
  },
});
