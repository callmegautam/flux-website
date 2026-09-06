import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const paper = '#f4f1ea';
const ink = '#16130f';
const inkSoft = '#4a453d';
const inkFaint = '#8b8478';
const red = '#b8351c';

async function serif(): Promise<{ name: string; data: ArrayBuffer; weight: 400; style: 'normal' }[]> {
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Newsreader:wght@400&display=swap',
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36',
        },
      },
    ).then((res) => res.text());

    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return [];

    const data = await fetch(url).then((res) => res.arrayBuffer());
    return [{ name: 'Newsreader', data, weight: 400, style: 'normal' }];
  } catch {
    return [];
  }
}

export async function ogCard({
  eyebrow,
  title,
  subtitle,
  footer,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  footer: string;
}) {
  const fonts = await serif();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: paper,
          color: ink,
          padding: '72px 80px',
          fontFamily: fonts.length ? 'Newsreader' : 'serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: inkFaint,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              fontSize: 150,
              lineHeight: 1,
              letterSpacing: -6,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              maxWidth: 880,
              fontSize: 40,
              lineHeight: 1.35,
              color: inkSoft,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', height: 4, width: 200, background: red }} />
          <div
            style={{
              display: 'flex',
              marginTop: 24,
              fontSize: 24,
              letterSpacing: 2,
              color: inkFaint,
            }}
          >
            {footer}
          </div>
        </div>
      </div>
    ),
    { ...ogSize, ...(fonts.length ? { fonts } : {}) },
  );
}
