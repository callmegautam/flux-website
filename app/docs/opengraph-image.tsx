import { ogCard, ogContentType, ogSize } from '@/lib/og';
import { site } from '@/lib/site';

export const alt = `${site.name} documentation`;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return ogCard({
    eyebrow: 'flux reference',
    title: 'docs',
    subtitle: 'Installation, every command, configuration, limitations and the roadmap.',
    footer: `v${site.version}   ${site.license}   flux.gautamsuthar.in/docs`,
  });
}
