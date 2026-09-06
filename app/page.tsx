import { CommandLine } from '@/components/command-line';
import { Masthead } from '@/components/masthead';
import { NavRail } from '@/components/nav-rail';
import { Label, Section, TextLink, Wrap } from '@/components/primitives';
import { SiteFooter } from '@/components/site-footer';
import { nav, pitch, site } from '@/lib/site';
import { compact, getStats } from '@/lib/stats';

export const revalidate = 21600;

export default async function Home() {
  const stats = await getStats();

  return (
    <>
      <div id="top">
        <Masthead stats={stats} />
      </div>

      <NavRail items={nav} />

      <section>
        <Wrap className="grid gap-x-10 gap-y-8 py-16 md:grid-cols-[7rem_1fr] md:py-20">
          <p className="tag md:sticky md:top-16 md:self-start">why flux</p>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-x-8">
            {pitch.map((item) => (
              <div key={item.title} className="border-t border-ink pt-4">
                <h2 className="max-w-[16ch] font-serif text-[1.35rem] leading-[1.2] tracking-[-0.015em]">
                  {item.title}
                </h2>
                <p className="mt-3 font-serif text-[1rem] leading-[1.65] text-ink-soft">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <main>
        <Section
          id="speed"
          n="01"
          title="Installing a package should not be something you wait through."
          lede="Flux does the one job a package manager has, and skips almost everything the older clients accumulated on the way here."
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-14">
            <div>
              <p className="max-w-[52ch] font-serif text-[1.08rem] leading-[1.7] text-ink-soft">
                Every tarball you have ever pulled is kept once, per user, in a shared cache, so a
                second project asking for the same package copies it out of your disk rather than
                off the network. There is no plugin pipeline to boot, no lifecycle machinery to
                walk, and no store to reconcile before the first byte moves.
              </p>
              <p className="mt-5 max-w-[52ch] font-serif text-[1.08rem] leading-[1.7] text-ink-soft">
                The result is a client that starts instantly and finishes quickly, on a cold cache
                and on a warm one alike.
              </p>
            </div>

            <div>
              <Label>the whole install</Label>
              <CommandLine command="flux install express" />
              <CommandLine command="flux install" />
              <p className="mt-4 max-w-[46ch] font-serif text-[0.98rem] leading-[1.65] text-ink-soft">
                Same shape as the commands you already type. If you know npm, there is nothing here
                to learn, and the <TextLink href="/docs">documentation</TextLink> is a reference,
                not a course.
              </p>
            </div>
          </div>

          <aside className="mt-12 max-w-[54ch] border-l-2 border-red pl-6">
            <p className="tag mb-2 text-red">honest note</p>
            <p className="font-serif text-[1rem] italic leading-[1.65] text-ink-soft">
              Flux is alpha. It installs direct dependencies only, with no dependency tree and no
              lockfile yet, so it is not ready to run your production build.{' '}
              <TextLink href="/docs#limits">What it does not do yet</TextLink> is written out in
              full.
            </p>
          </aside>
        </Section>

        <Section
          id="open-source"
          n="02"
          title="Open source, and open in the way that matters."
          lede="MIT licensed, built in public, no telemetry and no account. What you install is what you can read."
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-x-14">
            <p className="max-w-[54ch] font-serif text-[1.08rem] leading-[1.7] text-ink-soft">
              A package manager sits between you and every line of code you ship, which is a strange
              place for a black box. Flux is a few thousand lines of TypeScript you can read in an
              afternoon, released under {site.license}, with every binary built from the same public
              repository. Nothing phones home, nothing asks you to sign in, and nothing is held back
              for a paid tier.
            </p>

            <div className="lg:min-w-[16rem]">
              <Label>the repository</Label>
              {stats.stars !== null ? (
                <p className="font-serif text-[3rem] leading-none tracking-[-0.03em]">
                  {compact(stats.stars)}
                  <span className="ml-3 align-middle font-mono text-[0.7rem] tracking-[0.16em] text-ink-faint">
                    STARS
                  </span>
                </p>
              ) : null}
              <p className="mt-4 font-serif text-[1rem] leading-[1.6] text-ink-soft">
                <TextLink href={site.links.github} external>
                  callmegautam/flux
                </TextLink>{' '}
                carries the source, the issues and every release.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="install"
          n="03"
          title="Two ways in, both one line."
          lede="Take the npm package if Node is already on the machine. Take the standalone binary if you would rather not carry a runtime around."
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-14">
            <div>
              <Label>a · global npm package</Label>
              <CommandLine command={`npm install -g ${site.pkg}`} />
              <p className="mt-4 max-w-[46ch] font-serif text-[0.98rem] leading-[1.65] text-ink-soft">
                Requires Node 18 or later.
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
                PowerShell takes <code className="font-mono text-[0.85em] text-ink">irm</code>.
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-[52ch] font-serif text-[1.05rem] leading-[1.7] text-ink-soft">
            Prebuilt targets, checksums, the cache location and every command are in the{' '}
            <TextLink href="/docs">documentation</TextLink>.
          </p>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
