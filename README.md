# flux-website

The marketing site and documentation for [flux](https://github.com/callmegautam/flux), an open source package manager for JavaScript.

This repository holds the website only. The package manager itself lives in the [flux repository](https://github.com/callmegautam/flux).

## Stack

- Next.js 16 (App Router, React 19)
- Tailwind CSS 4
- TypeScript
- Bun as the package manager and runner

## Getting started

```bash
bun install
bun run dev
```

The site is then served at http://localhost:3000.

## Scripts

| Script              | What it does                          |
| ------------------- | ------------------------------------- |
| `bun run dev`       | Start the development server           |
| `bun run build`     | Build the production bundle            |
| `bun run start`     | Serve the production build             |
| `bun run lint`      | Run ESLint                             |
| `bun run typecheck` | Type check with the TypeScript compiler |

## Layout

```
app/          routes: the landing page, /docs, the root layout and global styles
components/   shared building blocks used by both pages
lib/site.ts   all site copy and data in one place
lib/stats.ts  live download and star counts from the npm and GitHub APIs
```

Most content edits are a change to `lib/site.ts` rather than to a page.

## Live data

The landing page reads monthly downloads from the npm registry API and stars from the GitHub API. Both are fetched on the server and revalidated every six hours. If either API is unavailable the matching figure is hidden rather than shown as zero.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and the [code of conduct](CODE_OF_CONDUCT.md).

## License

MIT. See [LICENSE](LICENSE).
