import { site } from '@/lib/site';
import { TextLink, Wrap } from './primitives';

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink">
      <Wrap className="grid gap-10 py-14 md:grid-cols-[7rem_1fr] md:gap-x-10">
        <p className="tag">colophon</p>

        <div className="max-w-[60ch]">
          <p className="font-serif text-[1.05rem] leading-[1.7] text-ink-soft">
            <span className="text-ink">flux</span> is an open source package manager for JavaScript,
            published to npm as{' '}
            <TextLink href={site.links.npm} external>
              {site.pkg}
            </TextLink>
            . It is {site.license} licensed and built by{' '}
            <TextLink href={site.links.author} external>
              {site.author}
            </TextLink>
            . The{' '}
            <TextLink href="/docs">documentation</TextLink> covers every command, and the source
            lives on{' '}
            <TextLink href={site.links.github} external>
              GitHub
            </TextLink>
            .
          </p>

          <p className="mt-8 font-mono text-[0.72rem] leading-[1.9] text-ink-faint">
            v{site.version} · {site.license} · alpha
          </p>
        </div>
      </Wrap>
    </footer>
  );
}
