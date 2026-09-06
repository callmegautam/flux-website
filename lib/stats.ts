import { site } from './site';

export type Stats = {
  downloads: number | null;
  stars: number | null;
};

const REVALIDATE = 60 * 60 * 6;

async function json(url: string): Promise<Record<string, unknown> | null> {
  try {
    const res = await fetch(url, {
      headers: { accept: 'application/json' },
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function getStats(): Promise<Stats> {
  const repo = site.links.github.replace('https://github.com/', '');

  const [dl, gh] = await Promise.all([
    json(`https://api.npmjs.org/downloads/point/last-month/${site.pkg}`),
    json(`https://api.github.com/repos/${repo}`),
  ]);

  return {
    downloads: typeof dl?.downloads === 'number' ? dl.downloads : null,
    stars: typeof gh?.stargazers_count === 'number' ? gh.stargazers_count : null,
  };
}

export function compact(n: number): string {
  return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(n);
}
