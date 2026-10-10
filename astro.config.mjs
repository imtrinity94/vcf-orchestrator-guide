// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages: set SITE_URL and BASE_PATH in the deploy workflow
// e.g. SITE_URL=https://imtrinity94.github.io  BASE_PATH=/orchestrator-cookbook
const site = process.env.SITE_URL || 'https://imtrinity94.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'VCF Orchestrator Guide',
      description:
        'A free, open cookbook for VCF Operations Orchestrator 9.x, written by Mayank and Claude.',
      logo: { src: './src/assets/mark.svg', replacesTitle: false },
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/imtrinity94/vcf-orchestrator-guide' },
      ],
      customCss: ['./src/styles/custom.css'],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=JetBrains+Mono:wght@400;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700&display=swap',
          },
        },
      ],
      expressiveCode: {
        themes: ['github-dark-default', 'github-light'],
        styleOverrides: { borderRadius: '6px', codeFontFamily: "'JetBrains Mono', ui-monospace, monospace" },
      },
      lastUpdated: true,
      editLink: { baseUrl: 'https://github.com/imtrinity94/vcf-orchestrator-guide/edit/main/' },
      sidebar: [
        { label: 'Start here', items: [{ label: 'About this book', slug: 'about' }, { label: 'How to read it', slug: 'how-to-read' }] },
        {
          label: '1. Getting Orchestrator running',
          items: [
            { label: 'Introduction', slug: 'chapter-1' },
            { autogenerate: { directory: 'chapter-1/recipes' } },
          ],
        },
        { label: '2. Configuring the appliance', slug: 'chapter-2', badge: { text: 'Soon', variant: 'note' } },
        { label: '3. Visual programming', slug: 'chapter-3', badge: { text: 'Soon', variant: 'note' } },
        { label: '4. Scripting and environments', slug: 'chapter-4', badge: { text: 'Soon', variant: 'note' } },
        { label: '5. Working with plug-ins', slug: 'chapter-5', badge: { text: 'Soon', variant: 'note' } },
        { label: '6. Content lifecycle', slug: 'chapter-6', badge: { text: 'Soon', variant: 'note' } },
        { label: '7. Advanced operations', slug: 'chapter-7', badge: { text: 'Soon', variant: 'note' } },
        { label: '8. Orchestrator in VCF', slug: 'chapter-8', badge: { text: 'Soon', variant: 'note' } },
      ],
    }),
  ],
});
