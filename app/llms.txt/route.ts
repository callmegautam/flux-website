import { cachePaths, commands, faqs, limitations, roadmap, site } from '@/lib/site';

export const dynamic = 'force-static';

function body(): string {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `- Website: ${site.url}`,
    `- Documentation: ${site.url}/docs`,
    `- Source: ${site.links.github}`,
    `- Package: ${site.links.npm}`,
    `- Version: ${site.version}`,
    `- License: ${site.license}`,
    `- Status: alpha`,
    '',
    '## Install',
    '',
    `npm install -g ${site.pkg}`,
    'curl -fsSL https://raw.githubusercontent.com/callmegautam/flux/main/install.sh | sh',
    'irm https://raw.githubusercontent.com/callmegautam/flux/main/install.ps1 | iex',
    '',
    '## Commands',
    '',
    ...commands.map((c) => `- ${c.name}${c.args ? ` ${c.args}` : ''}: ${c.desc} Aliases: ${c.aliases.join(', ')}.`),
    '',
    '## Cache',
    '',
    ...cachePaths.map((c) => `- ${c.platform}: ${c.path}`),
    '',
    '## Limitations',
    '',
    ...limitations.map((l) => `- ${l.title}: ${l.body}`),
    '',
    '## Roadmap',
    '',
    ...roadmap.map((item) => `- ${item}`),
    '',
    '## Questions',
    '',
    ...faqs.flatMap((item) => [`### ${item.q}`, '', item.a, '']),
  ];

  return `${lines.join('\n').trimEnd()}\n`;
}

export function GET() {
  return new Response(body(), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  });
}
