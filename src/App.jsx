export default function App() {
  return (
    <div className="min-h-[100svh] text-neutral-200 bg-neutral-800 flex flex-col items-center">
      <header className="w-full flex justify-center py-4 px-4 bg-[#592CE8]">
        <div className="container grid grid-cols-3 items-center">
          <a href="/" className="w-fit">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="64" height="64" rx="6" fill="currentColor" />
              <path
                d="M32 22.5806L28.5176 22.8013C26.2659 20.3006 19.9557 14 13.6717 14C13.6717 14 8.5136 21.2568 13.567 30.9406C12.1269 32.9755 11.2367 34.0297 11.0534 36.4568L6 37.1677L6.54985 39.5703L11.1581 38.9329L11.5247 40.6735L7.4139 42.9781L8.64451 45.16L12.4411 42.9781C15.4522 48.96 23.0715 52 32 52C40.9285 52 48.5478 48.96 51.5589 42.9781L55.3555 45.16L56.5861 42.9781L52.4753 40.6735L52.8419 38.9329L57.4502 39.5703L58 37.1677L52.9466 36.4568C52.7633 34.0297 51.8731 32.9755 50.433 30.9406C55.4864 21.2568 50.3283 14 50.3283 14C44.0443 14 37.7341 20.3006 35.4824 22.8013L32 22.5806ZM24.145 29.9355C24.8394 29.9355 25.5054 30.1938 25.9965 30.6535C26.4875 31.1133 26.7633 31.7369 26.7633 32.3871C26.7633 33.0373 26.4875 33.6609 25.9965 34.1206C25.5054 34.5804 24.8394 34.8387 24.145 34.8387C23.4506 34.8387 22.7846 34.5804 22.2936 34.1206C21.8025 33.6609 21.5267 33.0373 21.5267 32.3871C21.5267 31.7369 21.8025 31.1133 22.2936 30.6535C22.7846 30.1938 23.4506 29.9355 24.145 29.9355ZM39.855 29.9355C40.5494 29.9355 41.2154 30.1938 41.7064 30.6535C42.1975 31.1133 42.4733 31.7369 42.4733 32.3871C42.4733 33.0373 42.1975 33.6609 41.7064 34.1206C41.2154 34.5804 40.5494 34.8387 39.855 34.8387C39.1606 34.8387 38.4946 34.5804 38.0035 34.1206C37.5125 33.6609 37.2367 33.0373 37.2367 32.3871C37.2367 31.7369 37.5125 31.1133 38.0035 30.6535C38.4946 30.1938 39.1606 29.9355 39.855 29.9355ZM29.3817 37.2903H34.6183L32.7855 40.6981C33.3092 42.2671 34.7754 43.4194 36.5821 43.4194C37.6237 43.4194 38.6227 43.0319 39.3592 42.3423C40.0958 41.6526 40.5096 40.7172 40.5096 39.7419H41.8187C41.8187 41.0424 41.267 42.2895 40.285 43.209C39.3029 44.1286 37.9709 44.6452 36.5821 44.6452C34.6183 44.6452 32.9164 43.64 32 42.1935C31.0836 43.64 29.3817 44.6452 27.4179 44.6452C26.0291 44.6452 24.6971 44.1286 23.7151 43.209C22.733 42.2895 22.1813 41.0424 22.1813 39.7419H23.4904C23.4904 40.7172 23.9042 41.6526 24.6408 42.3423C25.3773 43.0319 26.3763 43.4194 27.4179 43.4194C29.2246 43.4194 30.6908 42.2671 31.2145 40.6981L29.3817 37.2903Z"
                fill="#592CE8"
              />
            </svg>
          </a>
          <h1 href="/" className="text-2xl text-center font-light">
            Mewi's Cardboard Box
          </h1>
        </div>
      </header>
      <main className="px-6 container flex-1  flex flex-col">
        <section className="flex flex-1 flex-col py-6 gap-3">
          <h2 className="text-center text-2xl font-bold">Projects</h2>
          <div
            id="project-list"
            className="bg-white/10 p-6 rounded shadow shadow-black/10 justify-start items-start content-start gap-6 grid flex-1"
          >
            <a
              title="URL shortener"
              href="/u"
              className="bg-blue-400 hover:bg-blue-400/75 transition-all text-white shadow shadow-blue-700/30 gap-2 flex flex-col items-center p-4 rounded-xl"
            >
              <img
                src="./url-shortener.png"
                width={125}
                alt="URL shortener icon"
              />
              <span className="font-semibold">URL Shortener</span>
            </a>
            <a
              title="Símbolos"
              href="https://s.mewi.xyz"
              className="bg-neutral-800 hover:bg-neutral-800/80 transition-all text-white shadow shadow-black/30 gap-2 flex flex-col items-center p-4 rounded-xl"
            >
              <img src="./simbolos.png" width={125} alt="URL shortener icon" />
              <span className="font-semibold">Símbolos</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
