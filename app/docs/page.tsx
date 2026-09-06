import type { Metadata } from 'next';
import { CommandLine } from '@/components/command-line';
import { JsonLd } from '@/components/json-ld';
import { NavRail } from '@/components/nav-rail';
import { Label, Leader, Section, TextLink, Wrap } from '@/components/primitives';
import { SiteFooter } from '@/components/site-footer';
import { docsSchema } from '@/lib/schema';
import {
  cachePaths,
  commands,
  docsNav,
  envVars,
  limitations,
  roadmap,
  site,
  targets,
} from '@/lib/site';

const description = `Reference for ${site.name}: installation, every command and alias, the cache location, current limitations and what is planned next.`;

export const metadata: Metadata = {
  title: 'Documentation',
  description,
  alternates: {
    canonical: '/docs',
  },
  openGraph: {
    type: 'article',
    url: `${site.url}/docs`,
    title: `${site.name} documentation`,
    description,
    siteName: site.name,
    locale: 'en_US',
    images: [
      {
        url: `${site.url}/docs/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${site.name} documentation`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} documentation`,
    description,
    images: [`${site.url}/docs/opengraph-image`],
  },
};

export default function Docs() {
  return (
    <>
      <JsonLd data={docsSchema()} />

      <header id="top" className="pt-10 sm:pt-14">
        <Wrap>
          <p className="tag">
            <TextLink href="/">flux</TextLink> · reference
          </p>

          <h1 className="mt-6 max-w-[14ch] font-serif text-[3.2rem] font-normal leading-[0.95] tracking-[-0.035em] sm:text-[4.5rem]">
            Documentation
          </h1>

          <p className="mt-6 max-w-[54ch] pb-12 font-serif text-[1.08rem] leading-[1.7] text-ink-soft">
            Everything Flux {site.version} can do, written out once. Installation, the full command
            set, where the cache lives, and what is still missing.
          </p>
        </Wrap>
      </header>

      <NavRail items={docsNav} numbered />

      <div className="border-b border-ink bg-paper-deep">
        <Wrap className="py-5">
          <p className="tag mb-3">the complete command set</p>
          <p className="font-mono text-[0.95rem] leading-[2] tracking-[-0.01em] sm:text-[1.15rem]">
            {commands.map((cmd, i) => (
              <span key={cmd.name}>
                {i > 0 ? <span className="mx-2.5 text-red sm:mx-3.5">·</span> : null}
                {cmd.name}
              </span>
            ))}
          </p>
        </Wrap>
      </div>

      <main>
        <Section
          id="install"
          n="01"
          title="Two ways in."
          lede="Take the npm package if Node is already on the machine. Take the standalone binary if you would rather not carry a runtime around."
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-14">
            <div>
              <Label>a · global npm package</Label>
              <CommandLine command={`npm install -g ${site.pkg}`} />
              <CommandLine command={`npx ${site.pkg} --help`} />
              <p className="mt-4 max-w-[46ch] font-serif text-[0.98rem] leading-[1.65] text-ink-soft">
                Requires Node 18 or later. To update, run the same command again. To remove it, run{' '}
                <code className="font-mono text-[0.85em] text-ink">npm uninstall -g {site.pkg}</code>
                .
              </p>
            </div>

            <div>
              <Label>b · standalone binary</Label>
              <CommandLine command="curl -fsSL https://raw.githubusercontent.com/callmegautam/flux/main/install.sh | sh" />
              <CommandLine
                sigil=">"
                command="irm https://raw.githubusercontent.com/callmegautam/flux/main/install.ps1 | iex"
              />
              <p className="mt-4 max-w-[46ch] font-serif text-[0.98rem] leading-[1.65] text-ink-soft">
                Self contained, no Node needed. Linux and macOS take the curl script, Windows
                PowerShell takes <code className="font-mono text-[0.85em] text-ink">irm</code>. The
                Windows install is per user and needs no administrator rights. To remove it, delete
                the binary.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-x-14">
            <div>
              <Label>prebuilt targets</Label>
              <ul>
                {targets.map((t) => (
                  <li key={t.id} className="border-b border-rule py-3">
                    <div className="flex items-baseline">
                      <code className="font-mono text-[0.85rem] text-ink">{t.id}</code>
                      <Leader />
                      <span className="font-serif text-[0.95rem] text-ink-soft">
                        {t.platform}, {t.arch}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-[48ch] font-serif text-[0.98rem] leading-[1.65] text-ink-soft">
                Every{' '}
                <TextLink href={site.links.releases} external>
                  release
                </TextLink>{' '}
                carries these binaries next to a{' '}
                <code className="font-mono text-[0.85em] text-ink">SHA256SUMS</code> file, which
                both install scripts verify for you.
              </p>
            </div>

            <div>
              <Label>environment</Label>
              <dl>
                {envVars.map((v) => (
                  <div key={v.name} className="border-b border-rule py-3.5">
                    <dt className="font-mono text-[0.82rem] text-red">{v.name}</dt>
                    <dd className="mt-1.5 max-w-[44ch] font-serif text-[0.98rem] leading-[1.6] text-ink-soft">
                      {v.note}{' '}
                      <span className="text-ink-faint">
                        Defaults to <span className="font-mono text-[0.85em]">{v.fallback}</span>.
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        <Section
          id="commands"
          n="02"
          title="Commands."
          lede="Listed roughly in the order you reach for them. Every alias is shown on the right. Run flux --help for the full set of flags."
        >
          <ol>
            {commands.map((cmd, i) => (
              <li
                key={cmd.name}
                className="grid gap-x-6 border-b border-rule py-5 md:grid-cols-[2.5rem_1fr]"
              >
                <span className="hidden font-mono text-[0.75rem] leading-[1.9] text-ink-faint md:block">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div>
                  <div className="flex items-baseline">
                    <code className="whitespace-nowrap font-mono text-[1rem] font-medium text-ink">
                      {cmd.name}
                      {cmd.args ? (
                        <span className="font-normal text-ink-faint"> {cmd.args}</span>
                      ) : null}
                    </code>
                    <Leader />
                    <span className="whitespace-nowrap font-mono text-[0.72rem] text-ink-faint">
                      {cmd.aliases.join(' , ')}
                    </span>
                  </div>
                  <p className="mt-2 max-w-[62ch] font-serif text-[1rem] leading-[1.6] text-ink-soft">
                    {cmd.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-[56ch] border-l-2 border-red pl-6 font-serif text-[1rem] leading-[1.65] text-ink-soft">
            Pass <code className="font-mono text-[0.85em] text-ink">--flux</code> to{' '}
            <code className="font-mono text-[0.85em] text-ink">install</code> to resolve tarballs
            through the Flux registry instead of npm.
          </p>
        </Section>

        <Section
          id="config"
          n="03"
          title="One cache directory. Nothing else to configure."
          lede="Downloaded tarballs are kept per user, in the place your platform expects them."
        >
          <div className="max-w-[46rem]">
            <Label>cache location</Label>
            <ul>
              {cachePaths.map((row) => (
                <li key={row.platform} className="border-b border-rule py-3">
                  <div className="flex flex-wrap items-baseline">
                    <span className="font-serif text-[1rem] text-ink">{row.platform}</span>
                    <Leader />
                    <code className="font-mono text-[0.8rem] text-ink-soft">{row.path}</code>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-5 max-w-[52ch] font-serif text-[1rem] leading-[1.65] text-ink-soft">
              Set <code className="font-mono text-[0.85em] text-red">FLUX_CACHE_DIR</code> to put
              them somewhere else, and run{' '}
              <code className="font-mono text-[0.85em] text-ink">flux clear</code> to empty the
              cache.
            </p>
          </div>
        </Section>

        <Section
          id="limits"
          n="04"
          title="What Flux does not do yet."
          lede="Written out plainly, so you can decide whether that is fine for what you are building."
        >
          <ol className="max-w-[62rem]">
            {limitations.map((item, i) => (
              <li
                key={item.title}
                className="grid gap-x-6 gap-y-2 border-b border-rule py-6 md:grid-cols-[2.5rem_1fr]"
              >
                <span className="font-mono text-[0.75rem] leading-[1.9] text-red">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-[1.25rem] leading-snug tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-[64ch] font-serif text-[1rem] leading-[1.65] text-ink-soft">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="roadmap"
          n="05"
          title="What comes next."
          lede="Roughly in the order it matters. None of it is done yet, which is what the empty boxes mean."
        >
          <ul className="max-w-[46rem]">
            {roadmap.map((item) => (
              <li key={item} className="flex items-baseline gap-4 border-b border-rule py-3.5">
                <span aria-hidden className="font-mono text-[0.9rem] text-ink-faint">
                  &#9633;
                </span>
                <span className="font-serif text-[1.05rem] leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14 max-w-[58ch]">
            <Label>contributing</Label>
            <p className="font-serif text-[1.08rem] leading-[1.7] text-ink-soft">
              Open tasks and known bugs sit in the{' '}
              <TextLink href={site.links.issues} external>
                issues tab
              </TextLink>
              . Fork the repository, make your change, then run the type check and the build before
              you open a pull request. The{' '}
              <TextLink href={site.links.contributing} external>
                contributing guide
              </TextLink>{' '}
              has the longer version.
            </p>
          </div>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
