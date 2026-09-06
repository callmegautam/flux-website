import Link from 'next/link';
import type { ReactNode } from 'react';

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
  const className =
    'underline decoration-rule decoration-1 underline-offset-[0.25em] transition-colors hover:decoration-red hover:text-red';

  if (!external && href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
