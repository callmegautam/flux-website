import {
  cachePaths,
  commands,
  definition,
  envVars,
  faqs,
  limitations,
  roadmap,
  site,
  slug,
  targets,
} from './site';

const id = (path: string) => `${site.url}${path}`;

// Freshness signal for search and answer engines. Build time is the honest answer
// for a statically rendered site: it is when this copy of the page was produced.
const modified = new Date().toISOString();

const person = {
  '@type': 'Person',
  '@id': id('/#author'),
  name: site.author,
  url: site.links.authorSite,
  sameAs: [site.links.author, site.links.authorSite],
  jobTitle: 'Software engineer',
  knowsAbout: ['JavaScript', 'Node.js', 'TypeScript', 'Package managers', 'Open source'],
};

const project = {
  '@type': 'Organization',
  '@id': id('/#project'),
  name: site.name,
  alternateName: site.pkg,
  url: site.url,
  description: definition,
  logo: id('/icon.svg'),
  founder: { '@id': id('/#author') },
  foundingDate: site.published,
  sameAs: [site.links.github, site.links.npm],
};

const website = {
  '@type': 'WebSite',
  '@id': id('/#website'),
  url: site.url,
  name: site.name,
  alternateName: `${site.name}, ${site.tagline}`,
  description: site.description,
  inLanguage: site.lang,
  publisher: { '@id': id('/#project') },
  copyrightHolder: { '@id': id('/#author') },
  license: site.links.license,
};

const sourceCode = {
  '@type': 'SoftwareSourceCode',
  '@id': id('/#source'),
  name: site.name,
  description: `Source code for ${site.name}, ${site.tagline}`,
  codeRepository: site.links.github,
  programmingLanguage: { '@type': 'ComputerLanguage', name: 'TypeScript' },
  runtimePlatform: 'Node.js',
  license: site.links.license,
  author: { '@id': id('/#author') },
  isPartOf: { '@id': id('/#software') },
};

const application = {
  '@type': ['SoftwareApplication', 'WebApplication'],
  '@id': id('/#software'),
  name: site.name,
  alternateName: [site.pkg, 'flux package manager'],
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'Package Manager',
  operatingSystem: targets.map((target) => `${target.platform} ${target.arch}`),
  softwareVersion: site.version,
  releaseNotes: site.links.releases,
  description: definition,
  abstract: site.tagline,
  url: site.url,
  sameAs: [site.links.github, site.links.npm],
  downloadUrl: site.links.releases,
  installUrl: site.links.npm,
  codeRepository: site.links.github,
  license: site.links.license,
  copyrightHolder: { '@id': id('/#author') },
  programmingLanguage: 'TypeScript',
  softwareRequirements:
    'Node.js 18 or later for the npm package, no runtime for the standalone binary',
  memoryRequirements: 'Negligible',
  storageRequirements: 'A per user tarball cache in the platform cache directory',
  featureList: commands.map((command) => `${command.name} ${command.desc}`.trim()),
  softwareHelp: { '@id': id('/docs#article') },
  author: { '@id': id('/#author') },
  maintainer: { '@id': id('/#author') },
  publisher: { '@id': id('/#project') },
  provider: { '@id': id('/#project') },
  datePublished: site.published,
  dateModified: modified,
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    category: 'Free and open source',
  },
};

const howToInstall = {
  '@type': 'HowTo',
  '@id': id('/#install'),
  name: `How to install ${site.name}`,
  description: `Two ways to install ${site.name}: as a global npm package if Node.js is already on the machine, or as a standalone binary with no runtime.`,
  inLanguage: site.lang,
  totalTime: 'PT1M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
  tool: [{ '@type': 'HowToTool', name: 'A terminal' }],
  about: { '@id': id('/#software') },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Install the global npm package',
      text: `With Node.js 18 or later installed, run: npm install -g ${site.pkg}`,
      url: id('/#install'),
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Or install the standalone binary on Linux and macOS',
      text: `Without Node.js, run: curl -fsSL ${site.links.installSh} | sh`,
      url: id('/#install'),
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Or install the standalone binary on Windows',
      text: `In PowerShell, run: irm ${site.links.installPs1} | iex`,
      url: id('/#install'),
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Check it works',
      text: `Run flux --help to list every command, then flux install inside a project to install its dependencies.`,
      url: id('/docs#commands'),
    },
  ],
};

const commandList = {
  '@type': 'ItemList',
  '@id': id('/docs#commands-list'),
  name: `${site.name} commands`,
  description: `Every command ${site.name} ${site.version} accepts, with its aliases.`,
  numberOfItems: commands.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: commands.map((command, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `flux ${command.name}${command.args ? ` ${command.args}` : ''}`,
    description: `${command.desc} Aliases: ${command.aliases.join(', ')}.`,
    url: id('/docs#commands'),
  })),
};

const faqPage = {
  '@type': 'FAQPage',
  '@id': id('/#faq'),
  inLanguage: site.lang,
  isPartOf: { '@id': id('/#webpage') },
  about: { '@id': id('/#software') },
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    '@id': id(`/#faq-${slug(item.q)}`),
    name: item.q,
    url: id(`/#faq-${slug(item.q)}`),
    answerCount: 1,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
      url: id(`/#faq-${slug(item.q)}`),
      author: { '@id': id('/#author') },
    },
  })),
};

export function homeSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      person,
      project,
      website,
      application,
      sourceCode,
      howToInstall,
      faqPage,
      {
        '@type': 'WebPage',
        '@id': id('/#webpage'),
        url: site.url,
        name: `${site.name}, ${site.tagline}`,
        headline: `${site.name}, the fast open source package manager for JavaScript`,
        description: site.description,
        isPartOf: { '@id': id('/#website') },
        about: { '@id': id('/#software') },
        mainEntity: { '@id': id('/#software') },
        primaryImageOfPage: id('/opengraph-image'),
        inLanguage: site.lang,
        datePublished: site.published,
        dateModified: modified,
        author: { '@id': id('/#author') },
        potentialAction: {
          '@type': 'ReadAction',
          target: [id('/'), id('/docs')],
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '[data-speakable]'],
        },
        breadcrumb: { '@id': id('/#breadcrumb') },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': id('/#breadcrumb'),
        itemListElement: [{ '@type': 'ListItem', position: 1, name: site.name, item: site.url }],
      },
    ],
  };
}

export function docsSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      person,
      project,
      howToInstall,
      commandList,
      {
        '@type': 'TechArticle',
        '@id': id('/docs#article'),
        headline: `${site.name} documentation`,
        alternativeHeadline: `Install, configure and run ${site.name} ${site.version}`,
        description: `Reference for ${site.name}: installation, every command, configuration, current limitations and what is planned next.`,
        url: id('/docs'),
        image: id('/docs/opengraph-image'),
        isPartOf: { '@id': id('/#website') },
        about: { '@id': id('/#software') },
        mainEntityOfPage: { '@id': id('/docs#webpage') },
        author: { '@id': id('/#author') },
        publisher: { '@id': id('/#project') },
        inLanguage: site.lang,
        datePublished: site.published,
        dateModified: modified,
        proficiencyLevel: 'Beginner',
        dependencies: 'Node.js 18 or later for the npm package, none for the standalone binary',
        articleSection: ['Install', 'Commands', 'Config', 'Limitations', 'Roadmap'],
        keywords: [
          `${site.name} documentation`,
          `${site.name} commands`,
          `${site.name} install`,
          `${site.name} cache directory`,
          'javascript package manager cli',
        ],
        hasPart: [{ '@id': id('/docs#commands-list') }, { '@id': id('/#install') }],
        mentions: [
          ...envVars.map((v) => ({ '@type': 'Thing', name: v.name, description: v.note })),
          ...cachePaths.map((c) => ({
            '@type': 'Thing',
            name: `${site.name} cache directory on ${c.platform}`,
            description: c.path,
          })),
        ],
        disambiguatingDescription: [
          ...limitations.map((l) => `${l.title}: ${l.body}`),
          `Planned next: ${roadmap.join(', ')}.`,
        ].join(' '),
      },
      {
        '@type': 'WebPage',
        '@id': id('/docs#webpage'),
        url: id('/docs'),
        name: `${site.name} documentation`,
        isPartOf: { '@id': id('/#website') },
        about: { '@id': id('/#software') },
        mainEntity: { '@id': id('/docs#article') },
        primaryImageOfPage: id('/docs/opengraph-image'),
        inLanguage: site.lang,
        datePublished: site.published,
        dateModified: modified,
        breadcrumb: { '@id': id('/docs#breadcrumb') },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '[data-speakable]'],
        },
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
