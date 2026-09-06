import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function Icon() {
  const bar = (width: number, color: string) => ({
    display: 'flex',
    width,
    height: 12,
    background: color,
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 33,
          background: '#f4f1ea',
          padding: '0 22px',
        }}
      >
        <div style={bar(136, '#16130f')} />
        <div style={bar(136, '#b8351c')} />
        <div style={bar(85, '#16130f')} />
      </div>
    ),
    size,
  );
}
