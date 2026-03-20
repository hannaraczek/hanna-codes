import {defineConfig} from 'astro/config';
import netlify from '@astrojs/netlify';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: 'https://hanna.codes',
  integrations: [
    image({serviceEntryPoint: '@astrojs/image/sharp'}),
    sitemap({customPages: []}),
    prefetch(),
    sanity({
      projectId: 'uh7kbf9e',
      dataset: 'production',
      apiVersion: '2026-03-20',
      useCdn: true
    })
  ]
});
