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
        github: 'https://github.com/Lucentix',
        discord: 'https://lucentix.github.io/discord',
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
          {
            label: 'Project Cards',
            items: [
              { label: 'Introduction', slug: 'project-cards/introduction' },
              { label: 'Gameplay', slug: 'project-cards/gameplay' },
              { label: 'Technical', slug: 'project-cards/technical' },
            ],
        },
      ],
    }),
  ],
  images: {
    service: 'pass-through',
  },
});
