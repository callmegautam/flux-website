import type { ReactNode } from 'react';

/* the measure. everything sits inside this, rules go full bleed outside it. */
export function Wrap({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[70rem] px-5 sm:px-10 ${className}`}>{children}</div>;
}

export function Rule({ weight = 'hair' }: { weight?: 'hair' | 'ink' }) {
  return (
    <hr
      className={`w-full border-0 border-t ${
        weight === 'ink' ? 'border-ink' : 'border-rule'
      }`}
    />
  );
}

/*
  the signature grid: a narrow margin column that holds the section numeral,
  and a wide column that holds everything else. the numeral sticks while you
  read the section, the way a running head sits on a printed page.
*/
export function Section({
  id,
  n,
  title,
  lede,
  children,
}: {
  id: string;
  n: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-ink">
      <Wrap className="grid gap-x-10 gap-y-6 py-16 md:grid-cols-[7rem_1fr] md:py-20">
        <div className="md:sticky md:top-16 md:self-start">
          <span className="font-mono text-[0.8rem] tracking-[0.2em] text-red">§ {n}</span>
        </div>

        <div>
          <h2 className="max-w-[20ch] font-serif text-[2.1rem] font-normal leading-[1.08] tracking-[-0.015em] sm:text-[2.6rem]">
            {title}
          </h2>
          {lede ? (
            <p className="mt-4 max-w-[54ch] font-serif text-[1.08rem] leading-[1.65] text-ink-soft">
              {lede}
            </p>
          ) : null}
          <div className="mt-10">{children}</div>
        </div>
      </Wrap>
    </section>
  );
}

/* hanging mono label above a block, the way a manual labels a figure */
export function Label({ children }: { children: ReactNode }) {
  return <p className="tag mb-3">{children}</p>;
}

export function Leader() {
  return <span aria-hidden className="leader" />;
}

export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="underline decoration-rule decoration-1 underline-offset-[0.25em] transition-colors hover:decoration-red hover:text-red"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
