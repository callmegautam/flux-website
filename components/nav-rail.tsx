import Link from 'next/link';
import { site } from '@/lib/site';
import { Wrap } from './primitives';

export function NavRail({
  items,
  numbered = false,
}: {
  items: readonly { href: string; label: string }[];
  numbered?: boolean;
}) {
  return (
    <div className="sticky top-0 z-30 border-b border-ink bg-paper">
      <Wrap className="flex items-center justify-between gap-6 py-2.5">
        <Link href="/" className="font-serif text-[1.05rem] leading-none tracking-[-0.02em]">
          flux
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {items.map((item, i) => (
            <Link key={item.href} href={item.href} className="tag hover:text-red">
              {numbered ? (
                <span className="text-red">{String(i + 1).padStart(2, '0')} </span>
              ) : null}
              <span className="tracking-[0.12em]">{item.label}</span>
            </Link>
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
