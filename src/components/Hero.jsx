import fieldRigImage from '../assets/pdf-extracted/page-34-img-1.jpeg'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white animate-fade-in">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(15,23,42,0.98)_0%,rgba(15,23,42,0.9)_42%,rgba(15,23,42,0.45)_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:h-[calc(100vh-6rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-8">
        <div className="max-w-2xl animate-fade-in-up animate-stagger-1">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">Onega Group</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl xl:text-[4.25rem]">
            Civil engineering, construction and survey solutions
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
            Onega Group supports contractors, institutions, and project owners with soil investigation, topographic survey, piling
            support, field testing, and site supervision across Bangladesh.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-xl shadow-amber-500/25 transition hover:-translate-y-0.5 hover:bg-amber-400 sm:px-7"
            >
              Request Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-200 sm:px-7"
            >
              View Services
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Soil Investigation</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Topographic Survey</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Pile Load Testing</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Civil Supervision</span>
          </div>
        </div>

        <div className="relative animate-fade-in-up animate-stagger-2">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 shadow-[0_32px_100px_rgba(2,6,23,0.35)]">
            <img
              src={fieldRigImage}
              alt="Onega Group field soil investigation team"
              className="h-[min(52vh,34rem)] w-full object-cover"
            />
          </div>

          <div className="absolute left-4 top-4 max-w-[15rem] rounded-2xl border border-white/15 bg-slate-950/85 p-4 shadow-2xl backdrop-blur-md sm:left-6 sm:top-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Dhaka Based</p>
            <p className="mt-2 text-sm leading-6 text-slate-100">Serving construction and infrastructure projects across Bangladesh.</p>
          </div>

          <div className="absolute bottom-4 right-4 max-w-[17rem] rounded-2xl border border-white/15 bg-white/95 p-4 text-slate-950 shadow-2xl sm:bottom-6 sm:right-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Service Focus</p>
            <p className="mt-2 text-sm font-semibold leading-6">Soil testing, survey, piling support and site supervision.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
