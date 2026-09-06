import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: `${site.name}, ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    lang: site.lang,
    dir: 'ltr',
    categories: ['developer', 'productivity', 'utilities'],
    background_color: '#f4f1ea',
    theme_color: '#f4f1ea',
    icons: [
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any', purpose: 'any' },
      { src: '/icon-192.png', type: 'image/png', sizes: '192x192', purpose: 'any' },
      { src: '/icon-512.png', type: 'image/png', sizes: '512x512', purpose: 'any' },
      { src: '/icon-maskable-512.png', type: 'image/png', sizes: '512x512', purpose: 'maskable' },
      { src: '/apple-icon', type: 'image/png', sizes: '180x180', purpose: 'any' },
    ],
    shortcuts: [
      {
        name: 'Documentation',
        short_name: 'Docs',
        description: `Every ${site.name} command, the cache location and the roadmap.`,
        url: '/docs',
      },
    ],
  };
}
