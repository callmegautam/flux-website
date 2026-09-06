import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

const routes = [
  { path: '/', changeFrequency: 'weekly' as const, priority: 1 },
  { path: '/docs', changeFrequency: 'weekly' as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: [`${site.url}${route.path === '/' ? '' : route.path}/opengraph-image`],
  }));
}
