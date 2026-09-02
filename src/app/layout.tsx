import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Enterprise Starter — by manniche labs",
  description: "High-performance, production-ready starter template engineered with Next.js 16, React 19, TypeScript, and Tailwind CSS.",
  authors: [{ name: "Mikkel Manniche", url: "https://mikkelmanniche.dk" }],
  creator: "manniche labs",
  publisher: "manniche labs",
  metadataBase: new URL("https://mikkelmanniche.dk"),
  openGraph: {
    title: "Next.js Enterprise Starter",
    description: "Production-ready enterprise web template engineered for speed, clean architecture, and security.",
    url: "https://github.com/manniche-labs/next-enterprise-starter",
    siteName: "manniche labs",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen flex flex-col bg-[#09090b] text-[#fafafa]">
        {children}
      </body>
    </html>
  );
}
