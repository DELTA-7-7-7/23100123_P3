import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://23100123p3.netlify.app/',
  integrations: [preact()],
});