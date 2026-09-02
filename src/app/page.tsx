import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 max-w-5xl mx-auto text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-8">
        <Zap className="w-3.5 h-3.5" />
        Production-Grade Architecture
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
        Next.js Enterprise Starter
      </h1>

      {/* Subheadline */}
      <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-10">
        Engineered with <span className="text-blue-400 font-semibold">Next.js 16</span>,{" "}
        <span className="text-blue-400 font-semibold">React 19</span>,{" "}
        <span className="text-blue-400 font-semibold">TypeScript</span>, and{" "}
        <span className="text-blue-400 font-semibold">Tailwind CSS</span>. Clean architecture, zero bloat, and enterprise security out-of-the-box.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <a
          href="https://github.com/manniche-labs/next-enterprise-starter"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/20"
        >
          Use this template
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="https://mikkelmanniche.dk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-200 font-medium transition-all"
        >
          <Globe className="w-4 h-4 text-blue-400" />
          mikkelmanniche.dk
        </a>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left">
        <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur">
          <Layers className="w-6 h-6 text-blue-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">Modern Stack</h3>
          <p className="text-sm text-zinc-400">
            Next.js App Router, React Server Components, and full TypeScript strictness.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur">
          <ShieldCheck className="w-6 h-6 text-blue-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">Security Defaults</h3>
          <p className="text-sm text-zinc-400">
            Hardened headers, no powered-by banner, and OWASP-compliant practices.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur">
          <Zap className="w-6 h-6 text-blue-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">Ultra Fast</h3>
          <p className="text-sm text-zinc-400">
            Optimized for 100/100 Lighthouse performance and instant Core Web Vitals.
          </p>
        </div>
      </div>

      {/* Studio attribution footer */}
      <div className="mt-20 pt-8 border-t border-zinc-900 text-xs text-zinc-500">
        Maintained by <a href="https://github.com/manniche-labs" className="text-zinc-400 hover:text-white underline">manniche labs</a> &nbsp;•&nbsp; Founded by <a href="https://github.com/mikkelmanniche-dk" className="text-zinc-400 hover:text-white underline">Mikkel Manniche</a>
      </div>
    </main>
  );
}
