import { ogCard, ogContentType, ogSize } from '@/lib/og';
import { site } from '@/lib/site';

export const alt = `${site.name}, ${site.tagline}`;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return ogCard({
    eyebrow: 'open source package manager for javascript',
    title: site.name,
    subtitle: 'Installs faster than npm and pnpm. One binary, no runtime, MIT licensed.',
    footer: `v${site.version}   ${site.license}   flux.gautamsuthar.in`,
  });
}
