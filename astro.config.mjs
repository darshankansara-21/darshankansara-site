import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://darshankansara.com',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  redirects: {
    '/projects/lifelens': '/lifelens',
    '/projects/applyready': '/applyready',
  },
});
