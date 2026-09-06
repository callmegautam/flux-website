import { site } from '@/lib/site';
import { TextLink, Wrap } from './primitives';

/* a colophon, not a sitemap. */
export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink">
      <Wrap className="grid gap-10 py-14 md:grid-cols-[7rem_1fr] md:gap-x-10">
        <p className="tag">colophon</p>

        <div className="max-w-[60ch]">
          <p className="font-serif text-[1.05rem] leading-[1.7] text-ink-soft">
            <span className="text-ink">flux</span> is written in TypeScript and published to npm as{' '}
            <TextLink href={site.links.npm} external>
              {site.pkg}
            </TextLink>
            . It is {site.license} licensed and built by{' '}
            <TextLink href={site.links.author} external>
              {site.author}
            </TextLink>
            . Source, issues and releases live on{' '}
            <TextLink href={site.links.github} external>
              GitHub
            </TextLink>
            ; contributions are welcome, and the{' '}
            <TextLink href={site.links.contributing} external>
              contributing guide
            </TextLink>{' '}
            explains how to set the project up locally.
          </p>

          <p className="mt-8 font-mono text-[0.72rem] leading-[1.9] text-ink-faint">
            v{site.version} · {site.license} · alpha
            <br />
            set in Newsreader and JetBrains Mono.
          </p>
        </div>
      </Wrap>
    </footer>
  );
}
