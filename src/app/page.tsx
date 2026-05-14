const DOWNLOAD_URL =
  "https://appdistribution.firebase.dev/i/0b4faf8fffe7a674";

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
  },
  {
    title: "Autorizar",
    body: 'Se solicitado, permita a instalação de "Fontes Desconhecidas" nas configurações do seu navegador ou Android.',
  },
  {
    title: "Instalar",
    body: "Abra o arquivo .apk baixado e siga as instruções na tela.",
  },
] as const;

export default function Home() {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-gray-950">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        aria-hidden
      >
        <div className="absolute left-1/2 top-[-20%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[320px] w-[320px] rounded-full bg-indigo-500/15 blur-[90px]" />
      </div>

      <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <header className="animate-landing-in mb-12 flex flex-col items-center gap-3 text-center sm:mb-16">
          <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300 shadow-lg shadow-black/20 backdrop-blur-md">
            LOGO CLIENTE
          </div>
          <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Nome do Aplicativo
          </h1>
        </header>

        <section className="animate-landing-in animation-delay-100 flex flex-1 flex-col items-center text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Baixe a versão oficial
          </h2>
          <p className="mb-10 max-w-md text-pretty text-base leading-relaxed text-gray-400 sm:text-lg">
            Tenha acesso rápido e seguro ao nosso aplicativo oficial para
            Android.
          </p>

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 active:scale-[0.99] sm:max-w-md sm:py-5 sm:text-xl"
          >
            <DownloadIcon className="h-6 w-6 shrink-0 transition group-hover:translate-y-0.5" />
            Baixar APK (Android)
          </a>
        </section>

        <section
          className="animate-landing-in animation-delay-200 mt-14 w-full sm:mt-16"
          aria-labelledby="install-heading"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/30 backdrop-blur-md sm:p-8">
            <h3
              id="install-heading"
              className="mb-6 text-center text-lg font-semibold text-white"
            >
              Como instalar
            </h3>
            <ol className="space-y-5 text-left">
              {installSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="animate-landing-in flex gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0"
                  style={{
                    animationDelay: `${0.28 + index * 0.08}s`,
                  }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-sm font-bold text-blue-300">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-gray-100">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">
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
