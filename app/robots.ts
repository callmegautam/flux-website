import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

// Answer engines only quote what they are allowed to fetch, and several of them read
// a named rule before the wildcard. Naming them keeps the grant explicit rather than
// inherited, so a future tightening of the wildcard cannot silently lock them out.
const answerEngines = [
  'Google-Extended', // Gemini grounding and AI Overviews
  'GoogleOther',
  'OAI-SearchBot', // ChatGPT search index
  'GPTBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
  'Applebot-Extended',
  'Amazonbot',
  'Bingbot',
  'DuckAssistBot',
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  'MistralAI-User',
  'cohere-ai',
  'CCBot',
  'YouBot',
  'Diffbot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/_next/static/chunks/'] },
      ...answerEngines.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
