import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Newsreader } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { definition, plainTextAlternates, site } from '@/lib/site';
import './globals.css';

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

const title = 'flux, the fast open source package manager for JavaScript';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description: definition,
  applicationName: site.name,
  keywords: [
    'flux',
    'javascript package manager',
    'fast package manager',
    'npm alternative',
    'pnpm alternative',
    'open source package manager',
    'node package manager',
    'cli',
    'node.js',
    'typescript',
    'install packages faster',
    'javascript dependency manager',
    'single binary package manager',
    'mit licensed package manager',
  ],
  authors: [{ name: site.author, url: site.links.author }],
  creator: site.author,
  publisher: site.author,
  category: 'technology',
  alternates: {
    canonical: '/',
    types: plainTextAlternates,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: site.url,
    title,
    description: site.description,
    siteName: site.name,
    locale: site.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
  },
  manifest: '/manifest.webmanifest',
  formatDetection: { telephone: false },
  referrer: 'origin-when-cross-origin',
  other: {
    // Plain, quotable facts for answer engines that read meta before they read prose.
    'software:version': site.version,
    'software:license': site.license,
    'software:repository': site.links.github,
  },
};

export const viewport: Viewport = {
  themeColor: '#f4f1ea',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang={site.lang}
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
