import Image from "next/image";

const DOWNLOAD_URL =
  "https://appdistribution.firebase.dev/i/0b4faf8fffe7a674";

const CLIENT_LOGO = {
  src: "/OnEngenharia.webp",
  alt: "Andamento de Obra — identidade visual On Engenharia",
} as const;

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

const installSteps = [
  {
    title: "Baixar",
    body: "Clique no botão acima para iniciar o download.",
    badgeClass:
      "bg-blue-500/15 text-blue-300 ring-1 ring-inset ring-blue-500/25",
  },
  {
    title: "Autorizar",
    body: 'Se solicitado, permita a instalação de "Fontes Desconhecidas" nas configurações do seu navegador ou Android.',
    badgeClass:
      "bg-amber-500/15 text-amber-200 ring-1 ring-inset ring-amber-500/25",
  },
  {
    title: "Instalar",
    body: "Abra o arquivo .apk baixado e siga as instruções na tela.",
    badgeClass:
      "bg-emerald-500/15 text-emerald-200 ring-1 ring-inset ring-emerald-500/25",
  },
] as const;

export default function Home() {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-slate-950">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        aria-hidden
      >
        {/* Azul marca ~#3b82f6 (blue-500) */}
        <div className="absolute left-1/2 top-[-22%] h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[110px]" />
        {/* Profundidade alinhada a botões blue-800/900 do painel */}
        <div className="absolute bottom-[-12%] right-[-8%] h-[340px] w-[340px] rounded-full bg-blue-900/30 blur-[100px]" />
      </div>

      <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <header className="animate-landing-in mb-12 flex flex-col items-center gap-4 text-center sm:mb-16">
          <div className="surface-glass px-6 py-4 ring-1 ring-blue-500/15 sm:px-8 sm:py-5">
            <Image
              src={CLIENT_LOGO.src}
              alt={CLIENT_LOGO.alt}
              width={280}
              height={96}
              className="h-11 w-auto max-w-[min(100%,260px)] object-contain object-center sm:h-14 sm:max-w-[min(100%,300px)]"
              priority
            />
          </div>
          <div className="space-y-1.5">
            <h1 className="text-xl font-bold tracking-tight text-slate-50 sm:text-2xl">
              Andamento de Obra
            </h1>
            <p className="max-w-md text-pretty text-sm font-medium leading-snug text-slate-500 sm:text-base">
              Cronograma, marcos e acompanhamento em campo.
            </p>
          </div>
        </header>

        <section className="animate-landing-in animation-delay-100 flex flex-1 flex-col items-center text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Baixe a versão oficial
          </h2>
          <p className="mb-10 max-w-md text-pretty text-base leading-relaxed text-slate-500 sm:text-lg">
            Tenha acesso rápido e seguro ao aplicativo oficial para Android.
          </p>

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-blue-800 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-950/45 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-[0.99] active:bg-blue-900 sm:max-w-md sm:py-5 sm:text-xl"
          >
            <DownloadIcon className="h-6 w-6 shrink-0 text-blue-100 transition group-hover:translate-y-0.5" />
            Baixar APK (Android)
          </a>
        </section>

        <section
          className="animate-landing-in animation-delay-200 mt-14 w-full sm:mt-16"
          aria-labelledby="install-heading"
        >
          <div className="surface-glass p-6 sm:p-8">
            <h3
              id="install-heading"
              className="mb-6 text-center text-lg font-bold tracking-tight text-slate-50"
            >
              Como instalar
            </h3>
            <ol className="space-y-5 text-left">
              {installSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="animate-landing-in flex gap-4 border-b border-white/[0.06] pb-5 last:border-0 last:pb-0"
                  style={{
                    animationDelay: `${0.28 + index * 0.08}s`,
                  }}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${step.badgeClass}`}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-100">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
