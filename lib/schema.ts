import { commands, faqs, site } from './site';

const id = (path: string) => `${site.url}${path}`;

const person = {
  '@type': 'Person',
  '@id': id('/#author'),
  name: site.author,
  url: site.links.author,
  sameAs: [site.links.author],
};

const website = {
  '@type': 'WebSite',
  '@id': id('/#website'),
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: 'en',
  publisher: { '@id': id('/#author') },
};

const application = {
  '@type': 'SoftwareApplication',
  '@id': id('/#software'),
  name: site.name,
  alternateName: site.pkg,
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'Package Manager',
  operatingSystem: 'Linux, macOS, Windows',
  softwareVersion: site.version,
  description: site.description,
  url: site.url,
  downloadUrl: site.links.releases,
  installUrl: site.links.npm,
  codeRepository: site.links.github,
  license: site.links.license,
  programmingLanguage: 'TypeScript',
  softwareRequirements: 'Node.js 18 or later for the npm package, no runtime for the standalone binary',
  featureList: commands.map((command) => `${command.name} ${command.desc}`.trim()),
  author: { '@id': id('/#author') },
  maintainer: { '@id': id('/#author') },
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

const faqPage = {
  '@type': 'FAQPage',
  '@id': id('/#faq'),
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export function homeSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      person,
      website,
      application,
      faqPage,
      {
        '@type': 'WebPage',
        '@id': id('/#webpage'),
        url: site.url,
        name: `${site.name}, ${site.tagline}`,
        description: site.description,
        isPartOf: { '@id': id('/#website') },
        about: { '@id': id('/#software') },
        inLanguage: 'en',
      },
    ],
  };
}

export function docsSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      person,
      {
        '@type': 'TechArticle',
        '@id': id('/docs#article'),
        headline: `${site.name} documentation`,
        description: `Reference for ${site.name}: installation, every command, configuration, current limitations and what is planned next.`,
        url: id('/docs'),
        isPartOf: { '@id': id('/#website') },
        about: { '@id': id('/#software') },
        author: { '@id': id('/#author') },
        inLanguage: 'en',
        proficiencyLevel: 'Beginner',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': id('/docs#breadcrumb'),
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Documentation', item: id('/docs') },
        ],
      },
    ],
  };
}
