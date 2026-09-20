import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://darshankansara.com',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  integrations: [sitemap({ filter: (page) => new URL(page).pathname !== '/privacy-policy' })],
  redirects: {
    '/projects/lifelens': '/lifelens',
    '/projects/applyready': '/applyready',
  },
});
