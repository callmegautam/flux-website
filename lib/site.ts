export const site = {
  name: 'flux',
  url: 'https://flux.gautamsuthar.in',
  version: '0.3.0',
  license: 'MIT',
  pkg: '@iamgautamsuthar/flux',
  repo: 'callmegautam/flux',
  published: '2025-04-15',
  locale: 'en_US',
  lang: 'en',
  tagline: 'the fast, open source package manager for JavaScript.',
  description:
    'Flux is an open source package manager for JavaScript. It installs your dependencies faster than npm and pnpm, ships as a single binary with no runtime, and is MIT licensed all the way down.',
  author: 'Gautam Suthar',
  links: {
    github: 'https://github.com/callmegautam/flux',
    npm: 'https://www.npmjs.com/package/@iamgautamsuthar/flux',
    releases: 'https://github.com/callmegautam/flux/releases',
    issues: 'https://github.com/callmegautam/flux/issues',
    contributing: 'https://github.com/callmegautam/flux/blob/main/docs/CONTRIBUTING.md',
    license: 'https://github.com/callmegautam/flux/blob/main/LICENSE',
    author: 'https://github.com/callmegautam',
    authorSite: 'https://gautamsuthar.in',
    installSh: 'https://raw.githubusercontent.com/callmegautam/flux/main/install.sh',
    installPs1: 'https://raw.githubusercontent.com/callmegautam/flux/main/install.ps1',
  },
} as const;

// Answer engines quote definitions verbatim. Keep this one sentence, self contained
// and free of pronouns, so it survives being lifted out of the page.
export const definition =
  'Flux is a free, open source, MIT licensed command line package manager for JavaScript and Node.js that installs packages from the npm registry faster than npm and pnpm, and ships both as an npm package and as a single self contained binary with no runtime.';

/**
 * Every page repeats this under `alternates`. Next replaces the whole `alternates`
 * object when a page sets one, so a page that declares a canonical URL and omits
 * this would silently drop the plain text links the layout added.
 */
export const plainTextAlternates = {
  'text/plain': [
    { url: '/llms.txt', title: `${site.name} for language models` },
    { url: '/llms-full.txt', title: `${site.name}, full text` },
  ],
};

export function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const nav = [
  { href: '/#speed', label: 'Speed' },
  { href: '/#open-source', label: 'Open source' },
  { href: '/#install', label: 'Install' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/docs', label: 'Docs' },
] as const;

export const faqs = [
  {
    q: 'What is flux?',
    a: 'Flux is an open source command line package manager for JavaScript and Node.js projects. It installs, updates, lists and removes packages from the npm registry, runs the scripts in your package.json, and ships either as an npm package or as a single self contained binary.',
  },
  {
    q: 'Is flux faster than npm and pnpm?',
    a: 'Yes. Flux keeps one content addressed store per user and hardlinks packages from it into node_modules, so a second project asking for the same package does no network, download or extraction work. With a matching flux-lock.json it skips resolution entirely and installs straight from the store.',
  },
  {
    q: 'Is flux free and open source?',
    a: 'Flux is MIT licensed and developed in the open at github.com/callmegautam/flux. It is free for personal and commercial use, there is no paid tier, no account to create, and no telemetry. Every published binary is built from the same public repository you can read.',
  },
  {
    q: 'Is flux ready for production?',
    a: 'Not yet. Flux is alpha software. It now resolves the full dependency tree and writes a lockfile, but it never runs lifecycle scripts, so packages that compile native code at install time will not work, and it has no workspace support. Use it on side projects and experiments, and keep npm or pnpm for anything you ship.',
  },
  {
    q: 'How do I install flux?',
    a: 'With Node 18 or later already installed, run npm install -g @iamgautamsuthar/flux. Without Node, run the install script: curl -fsSL https://raw.githubusercontent.com/callmegautam/flux/main/install.sh | sh on Linux and macOS, or the matching irm command in PowerShell on Windows.',
  },
  {
    q: 'Does flux need Node.js?',
    a: 'Only if you install it from npm, where Node 18 or later is required. The standalone binary carries no runtime, so it works on a machine with no Node installed at all. Prebuilt binaries cover Linux, macOS and Windows on both Intel and ARM.',
  },
  {
    q: 'Does flux replace npm?',
    a: 'It aims to. Flux talks to the same npm registry, reads and writes the same package.json, and installs into the same node_modules directory, so a project stays compatible with every other client. Until lifecycle scripts and workspaces land, treat it as a companion rather than a replacement.',
  },
  {
    q: 'Where does flux cache packages?',
    a: 'In your platform cache directory: $XDG_CACHE_HOME/flux or ~/.cache/flux on Linux, ~/Library/Caches/flux on macOS, and %LOCALAPPDATA%\\flux\\Cache on Windows. Set FLUX_CACHE_DIR to move it somewhere else, run flux cache info to see how much each layer uses, and flux cache clean --all to empty it.',
  },
] as const;

export const docsNav = [
  { href: '#install', label: 'Install' },
  { href: '#commands', label: 'Commands' },
  { href: '#config', label: 'Config' },
  { href: '#limits', label: 'Limitations' },
  { href: '#roadmap', label: 'Roadmap' },
] as const;

export const pitch = [
  {
    title: 'Faster than npm and pnpm',
    body: 'Flux keeps a shared, content addressed package store, hardlinks from it instead of copying, and gets out of the way. Cold or warm, an install finishes before you have finished reading the line you typed.',
  },
  {
    title: 'Open source, end to end',
    body: 'MIT licensed, developed in the open, no telemetry and no account. Read the source, file an issue, or fork it. Every release is built from the same public repository you are looking at.',
  },
  {
    title: 'One binary, no runtime',
    body: 'Take it as an npm package if Node is already there, or as a single self contained binary if it is not. Nothing to configure, nothing to keep in sync.',
  },
] as const;

export const commands = [
  {
    name: 'init',
    args: '',
    aliases: ['create'],
    desc: 'Create a package.json in the current directory.',
  },
  {
    name: 'install',
    args: '[package]',
    aliases: ['add'],
    desc: 'Install one package, optionally at a version or range, and record it in package.json, or install every dependency already listed there. Pass --save-dev to record it under devDependencies, or --offline to install only from the local store.',
  },
  {
    name: 'uninstall',
    args: '[package]',
    aliases: ['remove', 'rm', 'delete'],
    desc: 'Remove one package, or all of them, from the project and node_modules.',
  },
  {
    name: 'reinstall',
    args: '[package]',
    aliases: ['re', 're-i'],
    desc: 'Wipe and reinstall one package, or all of them.',
  },
  {
    name: 'update',
    args: '[package]',
    aliases: ['upgrade'],
    desc: 'Fetch the latest published version of one package, or all of them.',
  },
  {
    name: 'list',
    args: '',
    aliases: ['ls', 'show'],
    desc: 'Print every dependency currently installed.',
  },
  {
    name: 'outdated',
    args: '',
    aliases: ['out', 'old', 'new'],
    desc: 'Compare installed versions against what the registry publishes.',
  },
  {
    name: 'info',
    args: '<package>',
    aliases: ['i'],
    desc: 'Show registry metadata for a package.',
  },
  {
    name: 'run',
    args: '<script>',
    aliases: ['r'],
    desc: 'Run a script defined in package.json.',
  },
  {
    name: 'clear',
    args: '',
    aliases: ['c'],
    desc: 'Delete every cache layer.',
  },
  {
    name: 'cache',
    args: '<info|dir|clean>',
    aliases: [],
    desc: 'Show the size of each cache layer, print the cache location, or clean some or all of it.',
  },
] as const;

export const targets = [
  { id: 'linux-x64', platform: 'Linux', arch: 'Intel / AMD 64-bit' },
  { id: 'linux-arm64', platform: 'Linux', arch: 'ARM 64-bit' },
  { id: 'darwin-x64', platform: 'macOS', arch: 'Intel' },
  { id: 'darwin-arm64', platform: 'macOS', arch: 'Apple silicon' },
  { id: 'windows-x64', platform: 'Windows', arch: '64-bit' },
] as const;

export const cachePaths = [
  { platform: 'Linux', path: '$XDG_CACHE_HOME/flux, or ~/.cache/flux' },
  { platform: 'macOS', path: '~/Library/Caches/flux' },
  { platform: 'Windows', path: '%LOCALAPPDATA%\\flux\\Cache' },
] as const;

export const envVars = [
  {
    name: 'FLUX_CACHE_DIR',
    fallback: 'platform cache directory',
    note: 'Where the metadata cache, tarballs and package store are kept.',
  },
  {
    name: 'FLUX_NETWORK_CONCURRENCY',
    fallback: '16',
    note: 'Parallel metadata and tarball requests.',
  },
  {
    name: 'FLUX_FS_CONCURRENCY',
    fallback: '32',
    note: 'Parallel filesystem link operations.',
  },
  {
    name: 'FLUX_VERSION',
    fallback: 'latest release',
    note: 'Read by both install scripts.',
  },
  {
    name: 'FLUX_INSTALL_DIR',
    fallback: '~/.local/bin  ·  %LOCALAPPDATA%\\flux\\bin',
    note: 'Where the standalone binary lands.',
  },
] as const;

export const limitations = [
  {
    title: 'No lifecycle scripts',
    body: 'preinstall, install and postinstall are never run, so packages that compile native code at install time will not work.',
  },
  {
    title: 'Peers are not auto installed',
    body: 'Peer dependencies are resolved, but you still have to add them to package.json yourself.',
  },
  {
    title: 'No workspaces',
    body: 'Monorepos and workspace protocols are not supported yet.',
  },
  {
    title: 'os and cpu are not enforced',
    body: 'Platform specific packages install everywhere, whether or not they can run there.',
  },
  {
    title: 'No store garbage collection',
    body: 'The store only grows. Run flux cache clean to reclaim space.',
  },
] as const;

export const roadmap = [
  'Registry search from the CLI',
  'A dependency tree viewer',
  'Workspace support',
  'Vulnerability scanning',
] as const;
