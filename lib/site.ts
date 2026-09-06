export const site = {
  name: 'flux',
  url: 'https://flux.gautamsuthar.in',
  version: '0.2.1',
  license: 'MIT',
  pkg: '@iamgautamsuthar/flux',
  tagline: 'The fast, open source package manager for JavaScript.',
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
  },
} as const;

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
    a: 'Yes. Flux keeps every downloaded tarball in one shared per user cache, so a second project asking for the same package copies it from disk instead of the network. It also starts with no plugin pipeline to boot and no store to reconcile, so the process begins working immediately.',
  },
  {
    q: 'Is flux free and open source?',
    a: 'Flux is MIT licensed and developed in the open at github.com/callmegautam/flux. It is free for personal and commercial use, there is no paid tier, no account to create, and no telemetry. Every published binary is built from the same public repository you can read.',
  },
  {
    q: 'Is flux ready for production?',
    a: 'Not yet. Flux is alpha software. It installs direct dependencies only, it does not walk the dependency tree, and it has no lockfile, so installs are not reproducible. Use it on side projects and experiments, and keep npm or pnpm for anything you ship.',
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
    a: 'It aims to. Flux talks to the same npm registry, reads and writes the same package.json, and installs into the same node_modules directory, so a project stays compatible with every other client. Until dependency tree resolution and a lockfile land, treat it as a companion rather than a replacement.',
  },
  {
    q: 'Where does flux cache packages?',
    a: 'In your platform cache directory: $XDG_CACHE_HOME/flux or ~/.cache/flux on Linux, ~/Library/Caches/flux on macOS, and %LOCALAPPDATA%\\flux\\Cache on Windows. Set FLUX_CACHE_DIR to move it somewhere else, and run flux clear to empty it.',
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
    body: 'Flux keeps a shared tarball cache, skips the bookkeeping the older clients carry, and gets out of the way. Cold or warm, an install finishes before you have finished reading the line you typed.',
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
    desc: 'Install one package and record it in package.json, or install every dependency already listed there.',
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
    desc: 'Delete the download cache.',
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
    note: 'Where downloaded tarballs are kept.',
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
    title: 'Direct dependencies only',
    body: 'Flux installs what is listed in your package.json. It does not walk the dependency tree, so most real packages will not work end to end.',
  },
  {
    title: 'No lockfile',
    body: 'Installs are not reproducible. Two runs of the same project can resolve to different versions.',
  },
  {
    title: 'No semver range resolution',
    body: 'A range like ^1.2.3 is not resolved against. Flux installs whatever the registry currently publishes as latest.',
  },
  {
    title: 'No test suite',
    body: 'There is no automated coverage yet. Treat every release as unverified until you have tried it yourself.',
  },
] as const;

export const roadmap = [
  'Full dependency tree resolution',
  'A lockfile, for reproducible installs',
  'Registry search from the CLI',
  'A dependency tree viewer',
  'Parallel installs',
  'Workspace support',
  'Vulnerability scanning',
] as const;
