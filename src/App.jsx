export default function App() {
  return (
    <div className="min-h-[100svh] bg-neutral-950 text-neutral-300 flex flex-col items-center">
      <header className="container py-6">
        <h1 href="/" className="text-4xl">
          Mewi's Cardboard Box
        </h1>
      </header>
      <main className="p-6 container">
        <section className="flex flex-col gap-6">
          <h2 className="text-center text-3xl">Personal Projects</h2>
          <div id="project-list">
            <a
              title="URL shortener"
              href="/u"
              className="bg-white/10 gap-2 flex flex-col items-center p-4 rounded-xl"
            >
              <img
                src="./url-shortener.png"
                width={125}
                alt="URL shortener icon"
              />
              <span className="font-bold">URL Shortener</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
