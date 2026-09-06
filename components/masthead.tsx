import { site } from '@/lib/site';
import { Wrap } from './primitives';

/* the title page: wordmark, then the specification strip. no navbar up here. */
export function Masthead() {
  const spec = [
    ['version', site.version],
    ['license', site.license],
    ['requires', 'node 18+'],
    ['status', 'alpha'],
  ] as const;

  return (
    <header className="pt-10 sm:pt-14">
      <Wrap>
        <p className="tag">a package manager for javascript</p>

        <h1 className="mt-6 flex items-start font-serif text-[5.5rem] font-normal leading-[0.82] tracking-[-0.045em] sm:text-[9rem] lg:text-[11rem]">
          flux
          <span className="ml-3 mt-2 font-mono text-[0.9rem] tracking-normal text-red sm:ml-5 sm:text-[1.05rem]">
            {site.version}
          </span>
        </h1>
      </Wrap>

      <div className="mt-10 border-y border-ink">
        <Wrap>
          <dl className="grid grid-cols-2 sm:grid-cols-4">
            {spec.map(([term, value], i) => (
              <div
                key={term}
                className={`py-3 ${i > 0 ? 'sm:border-l sm:border-rule sm:pl-5' : ''} ${
                  i % 2 === 1 ? 'border-l border-rule pl-5 sm:pl-5' : ''
                } ${i < 2 ? 'border-b border-rule sm:border-b-0' : ''}`}
              >
                <dt className="tag">{term}</dt>
                <dd className="mt-1 font-mono text-[0.85rem] text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </Wrap>
      </div>
    </header>
  );
}
