const concerns = [
  {
    name: 'Onega Development & Construction Ltd.',
    shortName: 'ODCL',
    category: 'Construction & Civil Engineering',
    description:
      'Civil engineering, construction support, soil investigation, survey, piling, testing, and field supervision services for infrastructure projects.',
    href: '#services',
    action: 'View Services',
  },
  {
    name: 'Alivardi.com',
    shortName: 'AL',
    category: 'Ecommerce Platform',
    description:
      'A digital commerce platform under Onega Group, focused on online product discovery, customer access, and modern retail operations.',
    href: 'https://alivardi.com',
    action: 'Visit Website',
    external: true,
  },
  {
    name: 'A.H Enterprise',
    shortName: 'AH',
    category: 'Construction & Civil Engineering',
    description:
      'A construction and civil engineering based company supporting project execution, field coordination, and related infrastructure works.',
    href: '#contact',
    action: 'Contact Us',
  },
]

function SisterConcerns() {
  return (
    <section id="sister-concerns" className="relative overflow-hidden bg-slate-50 px-6 py-20 sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_34%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-500">Sister Concerns</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
            Onega Group business concerns
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Onega Group brings together construction, civil engineering, and ecommerce initiatives through its growing group of
            sister concerns.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {concerns.map((concern) => (
            <article
              key={concern.name}
              className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-lg font-semibold text-amber-300">
                  {concern.shortName}
                </div>
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                  {concern.category}
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-slate-950">{concern.name}</h3>
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{concern.description}</p>

              <a
                href={concern.href}
                target={concern.external ? '_blank' : undefined}
                rel={concern.external ? 'noreferrer' : undefined}
                className="mt-7 inline-flex w-fit items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-amber-500/40 hover:bg-amber-500 hover:text-slate-950"
              >
                {concern.action}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SisterConcerns
