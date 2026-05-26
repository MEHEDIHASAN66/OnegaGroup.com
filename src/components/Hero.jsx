function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(125deg,#0b1220_0%,#1e3a8a_48%,#0b4f6c_100%)] text-white animate-fade-in"
    >
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.15),transparent_32%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-7 sm:space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 animate-fade-in-up animate-stagger-1 sm:text-sm">
            Civil Engineering and Survey Partner
          </div>

          <div className="animate-fade-in-up animate-stagger-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200 sm:text-base">
              Onega Development &amp; Construction Ltd. (ODCL)
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl xl:text-6xl">
              Practical engineering support for construction projects across Bangladesh.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              ODCL works with contractors, institutions, and project owners to deliver soil testing, survey, piling support, and field supervision with clear reporting and accountable coordination.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 animate-fade-in-up animate-stagger-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-xl shadow-amber-400/30 transition hover:-translate-y-0.5 hover:bg-amber-300 sm:px-7"
            >
              Request Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15 sm:px-7"
            >
              View Services
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 animate-fade-in-up animate-stagger-4">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">Soil Testing</span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">Pile Load Testing</span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">Topographic Survey</span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">Civil Supervision</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 animate-fade-in-up animate-stagger-5">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300 sm:text-sm">Projects delivered</p>
              <p className="mt-3 text-3xl font-semibold text-white">120+</p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300 sm:text-sm">Years of experience</p>
              <p className="mt-3 text-3xl font-semibold text-white">7+</p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300 sm:text-sm">Client satisfaction</p>
              <p className="mt-3 text-3xl font-semibold text-white">98%</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-[0_35px_120px_rgba(3,7,18,0.35)] backdrop-blur-2xl sm:p-7">
          <div className="rounded-[1.4rem] border border-white/15 bg-slate-950/35 p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">Project Workflow</p>
              <span className="rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Active
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-300">
                  <span>Site Assessment and Sampling</span>
                  <span>100%</span>
                </div>
                <div className="h-2 rounded-full bg-white/15">
                  <div className="h-full w-full rounded-full bg-cyan-300" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-300">
                  <span>Report and Design Inputs</span>
                  <span>92%</span>
                </div>
                <div className="h-2 rounded-full bg-white/15">
                  <div className="h-full w-[92%] rounded-full bg-amber-300" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-300">
                  <span>Field Execution Support</span>
                  <span>95%</span>
                </div>
                <div className="h-2 rounded-full bg-white/15">
                  <div className="h-full w-[95%] rounded-full bg-emerald-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.4rem] border border-white/15 bg-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">What We Handle</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-100">
                <li>Sub-soil investigation with lab and field testing</li>
                <li>Topographic survey and project mapping</li>
                <li>Site supervision with practical execution support</li>
              </ul>
            </div>
            <div className="rounded-[1.4rem] border border-white/15 bg-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Head Office</p>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                8/2, Paribagh, Motaleb Tower, Shahbagh, Dhaka-1000
                <br />
                +880 1714 109 516
                <br />
                odclbd@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-[1.4rem] border border-white/15 bg-slate-950/35 p-5 text-slate-100">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-100">Why Clients Work With ODCL</p>
              <h2 className="mt-3 text-xl font-semibold sm:text-2xl">
                Reliable field teams, formal documentation, and clear communication
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                We combine verified credentials, experienced technical personnel, and disciplined site coordination to keep project delivery on time and easier to manage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
