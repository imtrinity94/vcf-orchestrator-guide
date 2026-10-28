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
      logo: { src: './src/assets/logo.png', alt: '', replacesTitle: false },
      favicon: '/favicon.png',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/imtrinity94/vcf-orchestrator-guide' },
      ],
      customCss: ['./src/styles/custom.css'],
      components: { PageTitle: './src/components/PageTitle.astro' },
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
          },
        },
      ],
      expressiveCode: {
        themes: ['github-dark-default', 'github-light'],
        styleOverrides: { borderRadius: '6px', codeFontFamily: "'IBM Plex Mono', ui-monospace, monospace" },
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
        {
          label: '2. Configuring the appliance',
          items: [
            { label: 'Introduction', slug: 'chapter-2' },
            { autogenerate: { directory: 'chapter-2/recipes' } },
          ],
        },
        {
          label: '3. Visual programming',
          items: [
            { label: 'Introduction', slug: 'chapter-3' },
            { autogenerate: { directory: 'chapter-3/recipes' } },
          ],
        },
        {
          label: '4. Scripting and environments',
          items: [
            { label: 'Introduction', slug: 'chapter-4' },
            { autogenerate: { directory: 'chapter-4/recipes' } },
          ],
        },
        {
          label: '5. Working with plug-ins',
          items: [
            { label: 'Introduction', slug: 'chapter-5' },
            { autogenerate: { directory: 'chapter-5/recipes' } },
          ],
        },
        {
          label: '6. Content lifecycle',
          items: [
            { label: 'Introduction', slug: 'chapter-6' },
            { autogenerate: { directory: 'chapter-6/recipes' } },
          ],
        },
        {
          label: '7. Advanced operations',
          items: [
            { label: 'Introduction', slug: 'chapter-7' },
            { autogenerate: { directory: 'chapter-7/recipes' } },
          ],
        },
        {
          label: '8. Orchestrator in VCF',
          items: [
            { label: 'Introduction', slug: 'chapter-8' },
            { autogenerate: { directory: 'chapter-8/recipes' } },
          ],
        },
      ],
    }),
  ],
});
