import {
  cachePaths,
  commands,
  definition,
  envVars,
  faqs,
  limitations,
  pitch,
  roadmap,
  site,
  targets,
} from './site';

const url = (path: string) => `${site.url}${path}`;

const facts = [
  `- Name: ${site.name}`,
  `- Package: ${site.pkg}`,
  `- Version: ${site.version} (alpha)`,
  `- License: ${site.license}`,
  `- Author: ${site.author}`,
  `- Website: ${site.url}`,
  `- Documentation: ${url('/docs')}`,
  `- Source: ${site.links.github}`,
  `- Package page: ${site.links.npm}`,
];

const install = [
  '```sh',
  `npm install -g ${site.pkg}            # needs Node.js 18 or later`,
  `curl -fsSL ${site.links.installSh} | sh   # Linux and macOS, no runtime needed`,
  `irm ${site.links.installPs1} | iex        # Windows PowerShell`,
  '```',
];

/** llms.txt: the short, link first index an agent reads before deciding what to fetch. */
export function llmsIndex(): string {
  return join([
    `# ${site.name}`,
    '',
    `> ${definition}`,
    '',
    ...facts,
    '',
    '## Install',
    '',
    ...install,
    '',
    '## Docs',
    '',
    `- [Full text of this site](${url('/llms-full.txt')}): every command, limitation and answer in one file.`,
    `- [Documentation](${url('/docs')}): installation, commands, configuration, limitations, roadmap.`,
    `- [Commands](${url('/docs#commands')}): ${commands.map((c) => c.name).join(', ')}.`,
    `- [Configuration](${url('/docs#config')}): cache location and environment variables.`,
    `- [Limitations](${url('/docs#limits')}): what ${site.name} cannot do yet.`,
    `- [Roadmap](${url('/docs#roadmap')}): what is planned next.`,
    `- [FAQ](${url('/#faq')}): the questions people ask before installing it.`,
    '',
    '## Optional',
    '',
    `- [Releases](${site.links.releases}): prebuilt binaries and checksums.`,
    `- [Issues](${site.links.issues}): open bugs and tasks.`,
    `- [Contributing](${site.links.contributing}): how to send a change.`,
    `- [License](${site.links.license}): ${site.license}.`,
  ]);
}

/** llms-full.txt: the whole site as plain markdown, so nothing needs to be crawled. */
export function llmsFull(): string {
  return join([
    `# ${site.name}, ${site.tagline}`,
    '',
    `> ${definition}`,
    '',
    ...facts,
    `- Generated: ${new Date().toISOString()}`,
    '',
    '## Status',
    '',
    `${site.name} ${site.version} is alpha software. It installs direct dependencies only, does not walk`,
    'the dependency tree, and has no lockfile, so installs are not reproducible. Use it on side',
    'projects and experiments, and keep npm or pnpm for anything you ship.',
    '',
    '## Why flux',
    '',
    ...pitch.flatMap((item) => [`### ${item.title}`, '', item.body, '']),
    '## Install',
    '',
    ...install,
    '',
    'The npm package needs Node.js 18 or later. The standalone binary carries no runtime and works',
    'on a machine with no Node.js installed. Every release ships a SHA256SUMS file, which both',
    'install scripts verify.',
    '',
    '### Prebuilt targets',
    '',
    ...targets.map((t) => `- ${t.id}: ${t.platform}, ${t.arch}`),
    '',
    '## Commands',
    '',
    ...commands.map(
      (c) =>
        `- \`flux ${c.name}${c.args ? ` ${c.args}` : ''}\` (aliases: ${c.aliases.join(', ')}): ${c.desc}`,
    ),
    '',
    'Pass `--flux` to `install` to resolve tarballs through the Flux registry instead of npm.',
    '',
    '## Configuration',
    '',
    '### Cache location',
    '',
    ...cachePaths.map((c) => `- ${c.platform}: ${c.path}`),
    '',
    '### Environment variables',
    '',
    ...envVars.map((v) => `- \`${v.name}\`: ${v.note} Defaults to ${v.fallback}.`),
    '',
    '## Limitations',
    '',
    ...limitations.map((l) => `- ${l.title}: ${l.body}`),
    '',
    '## Roadmap',
    '',
    ...roadmap.map((item) => `- ${item}`),
    '',
    '## Frequently asked questions',
    '',
    ...faqs.flatMap((item) => [`### ${item.q}`, '', item.a, '']),
  ]);
}

function join(lines: string[]): string {
  return `${lines.join('\n').trimEnd()}\n`;
}
