import Link from 'next/link';
import { CommandLine } from './command-line';
import { site } from '@/lib/site';
import { compact, type Stats } from '@/lib/stats';
import { Wrap } from './primitives';

export function Masthead({ stats }: { stats: Stats }) {
  const figures = [
    stats.downloads !== null
      ? { term: 'downloads / month', value: compact(stats.downloads), note: 'npm registry' }
      : null,
    stats.stars !== null
      ? { term: 'stars on github', value: compact(stats.stars), note: 'and counting' }
      : null,
    { term: 'license', value: site.license, note: 'open source' },
    { term: 'version', value: site.version, note: 'alpha' },
  ].filter(Boolean) as { term: string; value: string; note: string }[];

  return (
    <header className="pt-10 sm:pt-14">
      <Wrap>
        <p className="tag">open source · faster than npm and pnpm</p>

        <h1 className="mt-6 flex items-start font-serif text-[5.5rem] font-normal leading-[0.82] tracking-[-0.045em] sm:text-[9rem] lg:text-[11rem]">
          flux
          <span className="ml-3 mt-2 font-mono text-[0.9rem] tracking-normal text-red sm:ml-5 sm:text-[1.05rem]">
            {site.version}
          </span>
        </h1>

        <p className="mt-8 font-serif text-[1.7rem] leading-[1.25] tracking-[-0.02em] sm:text-[2.3rem]">
          <span className="block">Install your dependencies,</span>
          <span className="block">and get on with it.</span>
        </p>

        <p
          data-speakable
          className="mt-5 max-w-[54ch] font-serif text-[1.08rem] leading-[1.7] text-ink-soft"
        >
          Flux is a package manager for JavaScript that installs{' '}
          <span className="font-medium text-ink decoration-red decoration-2 underline underline-offset-[0.25em]">
            faster than npm and pnpm
          </span>
          , ships as a single binary with no runtime, and is MIT licensed all the way down.
        </p>

        <div className="mt-9 max-w-[34rem]">
          <CommandLine command={`npm install -g ${site.pkg}`} />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 pb-12">
          <Link href="/docs" className="tag border-b-2 border-red pb-1 text-ink hover:text-red">
            read the docs →
          </Link>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="tag border-b border-rule pb-1 hover:border-red hover:text-red"
          >
            source on github ↗
          </a>
          <a
            href={site.links.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="tag border-b border-rule pb-1 hover:border-red hover:text-red"
          >
            package on npm ↗
          </a>
        </div>
      </Wrap>

      <div className="border-y border-ink bg-paper-deep">
        <Wrap>
          <dl className="grid grid-cols-2 sm:grid-cols-4">
            {figures.map((f, i) => (
              <div
                key={f.term}
                className={`py-5 ${i > 0 ? 'sm:border-l sm:border-rule sm:pl-5' : ''} ${
                  i % 2 === 1 ? 'border-l border-rule pl-5 sm:pl-5' : ''
                } ${i < 2 ? 'border-b border-rule sm:border-b-0' : ''}`}
              >
                <dt className="tag">{f.term}</dt>
                <dd className="mt-2 font-serif text-[2rem] leading-none tracking-[-0.02em] text-ink">
                  {f.value}
                </dd>
                <p className="mt-2 font-mono text-[0.68rem] text-ink-faint">{f.note}</p>
              </div>
            ))}
          </dl>
        </Wrap>
      </div>
    </header>
  );
}
