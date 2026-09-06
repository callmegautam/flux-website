import { nav, site } from '@/lib/site';
import { Wrap } from './primitives';

/* one line tall, mono, numbered. a running head rather than a navbar. */
export function NavRail() {
  return (
    <div className="sticky top-0 z-30 border-b border-ink bg-paper">
      <Wrap className="flex items-center justify-between gap-6 py-2.5">
        <a href="#top" className="font-serif text-[1.05rem] leading-none tracking-[-0.02em]">
          flux
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item, i) => (
            <a key={item.href} href={item.href} className="tag hover:text-red">
              <span className="text-red">{String(i + 1).padStart(2, '0')}</span>{' '}
              <span className="tracking-[0.12em]">{item.label}</span>
            </a>
          ))}
        </nav>

        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="tag hover:text-red"
        >
          github ↗
        </a>
      </Wrap>
    </div>
  );
}
