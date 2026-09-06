# Contributing

Thanks for taking the time to help improve the flux website.

This repository is the website only. Bugs in the package manager belong in the [flux repository](https://github.com/callmegautam/flux/issues).

## Setup

```bash
git clone https://github.com/callmegautam/flux-website.git
cd flux-website
bun install
bun run dev
```

Bun 1.2 or later and Node 20 or later are expected.

## Before you open a pull request

```bash
bun run lint
bun run typecheck
bun run build
```

All three should pass.

## Guidelines

- Keep copy in `lib/site.ts` where it already lives, rather than inlining new strings in a page.
- Match the existing style: plain prose, no emoji, no em dashes.
- Keep components small and server rendered unless client state is genuinely needed.
- One change per pull request, with a short description of what and why.

## Commit messages

Conventional commits, for example:

```
feat(docs): add a configuration section
fix(nav): correct the docs anchor on mobile
style(home): tighten the hero spacing
```

## Reporting an issue

Open an issue with what you expected, what happened, and the steps to reproduce it. Screenshots help for anything visual, along with the browser and screen size.
