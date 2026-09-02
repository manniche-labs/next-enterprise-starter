<div align="center">

  # ⚡ Next.js Enterprise Starter

  **High-performance, production-ready enterprise starter template engineered with Next.js 16, React 19, TypeScript, and Tailwind CSS.**

  <br />

  [![Next.js 16](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
  [![React 19](https://img.shields.io/badge/React-19.0-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
  [![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
  [![Project Views](https://komarev.com/ghpvc/?username=manniche-labs-next-enterprise-starter&color=2563eb&style=flat-square&label=PROJECT+VIEWS)](https://github.com/manniche-labs/next-enterprise-starter)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
  [![Maintained by manniche labs](https://img.shields.io/badge/Studio-manniche_labs-0f0f0f?style=flat-square&logo=github&logoColor=white)](https://github.com/manniche-labs)

  <br />

  <sub>Crafted with precision by <b><a href="https://github.com/mikkelmanniche-dk">Mikkel Manniche</a></b> at <b><a href="https://github.com/manniche-labs">manniche labs</a></b> • <a href="https://mikkelmanniche.dk">mikkelmanniche.dk</a></sub>

</div>

---

## 🚀 Overview

**next-enterprise-starter** is an opinionated, minimalist foundation for modern digital products. It bypasses boilerplate configuration so you can start shipping clean, high-performance web applications immediately.

### ✨ Highlights
* **⚡ Cutting-Edge Stack:** Built on Next.js 16 (App Router), React 19, and Tailwind CSS v4.
* **🛡️ Production Hardened:** Pre-configured security headers, no server banners, and strict TypeScript types.
* **🎨 Dark-Mode First:** Clean, elegant dark aesthetic inspired by modern engineering studios.
* **📈 100/100 Lighthouse Ready:** Zero unnecessary JavaScript, optimized fonts, and automatic image compression.
* **🧩 Modular Architecture:** Clean folder structure with `@/` path aliasing and reusable utility functions.

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
│   │   ├── layout.tsx       # Root layout & OpenGraph SEO metadata
│   │   └── page.tsx         # Modern landing hero component
│   └── lib/
│       └── utils.ts         # cn() className merger utility
├── next.config.ts           # Production compression & header rules
├── tsconfig.json            # Strict TypeScript configuration
└── package.json
```

---

## 🛠️ Scripts

* `npm run dev` — Start the Next.js development server
* `npm run build` — Create an optimized production build
* `npm run start` — Run the production build locally
* `npm run lint` — Run ESLint code quality checks

---

## 🤝 Contributing

Contributions, feedback, and pull requests are warmly welcomed! If you find this template helpful, please consider giving it a **⭐ Star** on GitHub.

---

## 👨‍💻 Maintainer & Engineering Studio

* **Engineering Studio:** [manniche labs](https://github.com/manniche-labs)
* **Lead Architect:** [Mikkel Manniche](https://github.com/mikkelmanniche-dk)
* **Official Platform:** [mikkelmanniche.dk](https://mikkelmanniche.dk)

License: [MIT](LICENSE)
