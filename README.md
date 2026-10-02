<img src=".github/banner.svg" alt="" width="100%">

<div align="center">

# ⚡ next-enterprise-starter

**A small, opinionated starter for Next.js 16, React 19, TypeScript and Tailwind CSS 4, with security headers and pre-commit linting set up.**

  <br />

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Maintained by manniche labs](https://img.shields.io/badge/Studio-manniche_labs-0f0f0f?style=flat-square&logo=github&logoColor=white)](https://github.com/manniche-labs)

  <br />

<sub>Made by <b><a href="https://github.com/mikkelmanniche-dk">Mikkel Manniche</a></b> at <b><a href="https://github.com/manniche-labs">manniche labs</a></b> • <a href="https://mikkelmanniche.dk">mikkelmanniche.dk</a></sub>

</div>

---

## 🚀 Overview

**next-enterprise-starter** is a minimal foundation for a new Next.js site: two example routes, a dark theme, security headers and code-quality tooling, so you can skip the setup and start building.

### ✨ Highlights

- **⚡ Current stack:** Next.js 16 (App Router), React 19 and Tailwind CSS v4.
- **🛡️ Security headers:** HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` and `Permissions-Policy` in `next.config.ts`, and no `X-Powered-By` header. There is no CSP; add one for your app.
- **🎨 Dark theme:** A simple dark landing page and an about page to build on.
- **🧹 Code quality:** Strict TypeScript, ESLint, Prettier and a pre-commit hook.
- **🧩 Path alias:** `@/` imports and a `cn()` className helper.

---

## 📦 Getting Started

### 1. Clone or Use as Template

```bash
git clone https://github.com/manniche-labs/next-enterprise-starter.git my-app
cd my-app
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
# or
bun install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📁 Project Structure

```
next-enterprise-starter/
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind CSS v4 & custom design tokens
│   │   ├── about/page.tsx   # Example route using generateMetadata()
│   │   ├── layout.tsx       # Root layout & OpenGraph SEO metadata
│   │   └── page.tsx         # Modern landing hero component
│   └── lib/
│       └── utils.ts         # cn() className merger utility
├── .husky/pre-commit        # Runs lint-staged before every commit
├── eslint.config.mjs        # ESLint flat config (Next.js core web vitals + TypeScript)
├── next.config.ts           # Production compression & security headers
├── postcss.config.mjs       # Tailwind CSS v4 PostCSS plugin
├── tsconfig.json            # Strict TypeScript configuration
└── package.json
```

---

## 🛠️ Scripts

- `npm run dev` — Start the Next.js development server
- `npm run build` — Create an optimized production build
- `npm run start` — Run the production build locally
- `npm run lint` — Run ESLint code quality checks
- `npm run typecheck` — Type-check the project without emitting files
- `npm run format` — Format all files with Prettier
- `npm run format:check` — Check formatting without writing changes

A pre-commit hook (husky + lint-staged) runs ESLint and Prettier on staged files. It is installed automatically by `npm install`.

---

## 🤝 Contributing

Contributions, feedback, and pull requests are warmly welcomed! If you find this template helpful, please consider giving it a **⭐ Star** on GitHub.

---

## 👨‍💻 Maintainer

[Mikkel Manniche](https://github.com/mikkelmanniche-dk) at [manniche labs](https://github.com/manniche-labs) · [mikkelmanniche.dk](https://mikkelmanniche.dk)

License: [MIT](LICENSE)
