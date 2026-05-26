import page6Preview from '../assets/pdf-previews/doc2-page-6.jpg'
import page7Preview from '../assets/pdf-previews/doc2-page-7.jpg'
import page8Preview from '../assets/pdf-previews/doc2-page-8.jpg'
import page9Preview from '../assets/pdf-previews/doc2-page-9.jpg'
import page10Preview from '../assets/pdf-previews/doc2-page-10.jpg'
import page11Preview from '../assets/pdf-previews/doc2-page-11.jpg'
import page12Preview from '../assets/pdf-previews/doc2-page-12.jpg'
import page13Preview from '../assets/pdf-previews/doc2-page-13.jpg'

const profileCards = [
  {
    title: 'Business Background',
    detail: 'Onega Group was built by experienced engineers to serve civil engineering contracts with field-capable execution teams.',
    image: page6Preview,
  },
  {
    title: 'Company Qualification',
    detail: 'Profile records include core company details, registrations, and formal qualifications for infrastructure delivery.',
    image: page7Preview,
  },
  {
    title: 'Management Team',
    detail: 'Leadership credentials and management roles are presented for client review and procurement reference.',
    image: page8Preview,
  },
  {
    title: 'Survey Team Capacity',
    detail: 'Specialized surveyor positions with role history and experience are listed in the archive pages.',
    image: page9Preview,
  },
  {
    title: 'Scope Of Services',
    detail: 'Sub-soil investigation, non-destructive testing, survey, and civil construction services are clearly specified.',
    image: page10Preview,
  },
  {
    title: 'Equipment & Machinery',
    detail: 'Rigs, test equipment, and supporting field machinery are presented with quantity and use-case details.',
    image: page11Preview,
  },
  {
    title: 'Project Records',
    detail: 'Current and completed projects are listed with authority, contractor context, and service scope references.',
    image: page12Preview,
  },
  {
    title: 'Delivery History',
    detail: 'Additional project history pages reinforce Onega Group&apos;s practical delivery footprint in Bangladesh.',
    image: page13Preview,
  },
]

function CompanyProfileHighlights() {
  return (
    <section className="relative overflow-hidden bg-slate-100 px-6 py-20 sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.16),transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-500">Profile Highlights</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
            Company Profile Highlights
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore Onega Group&apos;s company background, service capabilities, equipment resources, technical team, and completed project
            records in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {profileCards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-1.5 hover:border-amber-500/40"
            >
              <div className="overflow-hidden p-3">
                <img
                  src={card.image}
                  alt={card.title}
                  className="aspect-[4/3] w-full rounded-[1.2rem] border border-slate-200 object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-5 pb-5">
                <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/docs/odcl-company-profile.pdf"
            download="odcl-company-profile.pdf"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Download Company Profile PDF
          </a>
          <a
            href="/docs/project-1.pdf"
            download="project-1.pdf"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-500/40 hover:text-slate-950"
          >
            Download Project Directory PDF
          </a>
        </div>
      </div>
    </section>
  )
}

export default CompanyProfileHighlights
