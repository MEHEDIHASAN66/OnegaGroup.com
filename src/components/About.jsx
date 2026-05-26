import managingDirectorPhoto from '../assets/pdf-extracted/page-3-img-1.jpeg'
import companyCertificatePreview from '../assets/pdf-previews/doc2-page-15.jpg'

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-6 py-20 animate-fade-in sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-7 animate-fade-in-up animate-stagger-1 sm:space-y-8">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-500">About Onega Group</p>
          <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">
            A field-focused engineering company built for dependable project delivery.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Onega Group, established in 2018, supports civil and infrastructure projects with soil investigation, pile-related services, survey, and on-site supervision across Bangladesh.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="group cursor-pointer rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-amber-500/50 hover:bg-white hover:shadow-lg sm:p-6">
              <p className="text-sm text-slate-500 transition group-hover:text-amber-600">Quality assurance</p>
              <p className="mt-3 text-lg font-semibold text-slate-950 transition group-hover:text-amber-600 sm:text-xl">
                Structured testing and reporting
              </p>
            </div>
            <div className="group cursor-pointer rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-amber-500/50 hover:bg-white hover:shadow-lg sm:p-6">
              <p className="text-sm text-slate-500 transition group-hover:text-amber-600">End-to-end delivery</p>
              <p className="mt-3 text-lg font-semibold text-slate-950 transition group-hover:text-amber-600 sm:text-xl">
                From site review to project handover support
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.8fr_1fr] animate-fade-in-up animate-stagger-2">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_32px_100px_rgba(15,23,42,0.15)] transition hover:-translate-y-2 hover:shadow-[0_40px_120px_rgba(245,158,11,0.2)] sm:p-6">
            <div className="mx-auto max-w-[11rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
              <img
                src={managingDirectorPhoto}
                alt="Managing director portrait from company profile"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-amber-300">Managing director&apos;s message</p>
            <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              &quot;Quality, dynamic thinking, and innovation&quot; remains the working principle behind how Onega Group plans, executes, and reports each assignment.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-[0_32px_100px_rgba(15,23,42,0.08)] transition hover:-translate-y-2 hover:shadow-[0_40px_120px_rgba(245,158,11,0.15)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">Profile credential</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950 sm:text-2xl">
              Registered company credentials from the official profile
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Key registration pages are presented directly from company records for client verification and procurement confidence.
            </p>
            <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-sm">
              <img
                src={companyCertificatePreview}
                alt="Certificate preview from the company profile PDF"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
