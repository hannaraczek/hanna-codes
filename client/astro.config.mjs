import {defineConfig} from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import sanity from 'astro-sanity';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  site: 'https://hanna.codes',
  integrations: [sitemap(), sanity({
    projectId: 'uh7kbf9e',
    dataset: 'production',
    apiVersion: '2026-03-20',
    useCdn: true
  }), solidJs()]
});