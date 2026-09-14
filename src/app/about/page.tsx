import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const title = "About — Next.js Enterprise Starter";
const description =
  "What the Next.js Enterprise Starter includes, and how to add your own pages with typed, per-route metadata.";

// generateMetadata() runs on the server and can await data (a CMS entry, a
// database row) before building the <head>. This page has no data to fetch,
// so it returns static values — swap in your own lookup when you need one.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title,
    description,
    openGraph: { title, description },
  };
}

const included = [
  "Next.js 16 App Router with React Server Components",
  "Tailwind CSS 4 wired through PostCSS",
  "Strict TypeScript and ESLint flat config",
  "Prettier with a lint-staged pre-commit hook",
  "Security headers set in next.config.ts",
];

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-24">
      <Link
        href="/"
        className="mb-12 inline-flex items-center gap-2 text-sm text-(--muted-foreground) hover:text-(--foreground)"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <h1 className="mb-6 text-4xl font-extrabold tracking-tight">About</h1>
      <p className="mb-12 text-lg text-(--muted-foreground)">{description}</p>

      <h2 className="mb-4 text-xl font-semibold">What&apos;s included</h2>
      <ul className="space-y-3 rounded-xl border border-(--border) bg-(--card) p-6">
        {included.map((item) => (
          <li key={item} className="text-(--card-foreground)">
            {item}
          </li>
        ))}
      </ul>
    </main>
  );
}
