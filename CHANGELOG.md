# Changelog

Follows [Keep a Changelog](https://keepachangelog.com).

## [Unreleased]

### Added
- Example `/about` page that sets its title and description with `generateMetadata()` (#2)
- Prettier with the Tailwind class-sorting plugin, plus a husky + lint-staged pre-commit hook that lints and formats staged files (#3)
- `format`, `format:check` and `typecheck` scripts
- Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`). The README already promised hardened headers, but none were sent.
- `package-lock.json`, so every clone installs the same dependency versions

### Fixed
- Tailwind CSS was never compiled: there was no `postcss.config.mjs` and `@tailwindcss/postcss` was missing, so the built CSS was 530 bytes and the page rendered unstyled
- `npm run lint` failed because it called `next lint`, which Next.js 16 removed, and there was no ESLint config. It now runs `eslint .` with a flat config.
- Removed an unused `CheckCircle2` import that the linter flagged
- Broken numbered list in CONTRIBUTING.md (literal `\n` characters)

### Removed
- `autoprefixer`, which Tailwind CSS 4 already includes

## [1.0.0] - 2026-09-02

### Added
- Initial release
- Next.js 16 App Router setup
- React 19 support
- Tailwind CSS 4 configuration
- TypeScript strict mode
- ESLint + Prettier
- Vercel-optimized deployment config
