import fieldRigImage from '../assets/pdf-extracted/page-34-img-1.jpeg'
import crewInspectionImage from '../assets/pdf-extracted/page-34-img-2.jpeg'
import mobilizationImage from '../assets/pdf-extracted/page-34-img-3.jpeg'
import partnerDirectoryPreview from '../assets/pdf-previews/project1-page-1.jpg'

const projects = [
  {
    title: 'Field soil investigation',
    summary: 'Active site work with drilling support, crew coordination, and practical on-ground supervision.',
    badge: 'Field archive',
    image: fieldRigImage,
    alt: 'ODCL field rig setup',
  },
  {
    title: 'On-site supervision and testing',
    summary: 'Safety-focused field oversight and close equipment handling reflect ODCL’s hands-on delivery style.',
    badge: 'Field archive',
    image: crewInspectionImage,
    alt: 'ODCL team supervising field testing',
  },
  {
    title: 'Community-scale mobilization',
    summary: 'A wider operating view shows the team working in real conditions with local presence and coordination.',
    badge: 'Field archive',
    image: mobilizationImage,
    alt: 'ODCL mobilization scene in the field',
  },
  {
    title: 'Testing network directory',
    summary: 'A company reference document that supports the portfolio with practical business and industry context.',
    badge: 'Company record',
    image: partnerDirectoryPreview,
    alt: 'Document preview from Project 1 PDF',
    document: true,
  },
]

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white animate-fade-in sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up animate-stagger-1">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Featured works</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Documented project visuals and supporting records</h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            This section now blends real field photography with company documentation so the portfolio feels more credible and project-driven.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/95 shadow-[0_24px_60px_rgba(15,23,42,0.25)] transition hover:-translate-y-2 hover:border-amber-500/50 hover:bg-slate-900 hover:shadow-[0_32px_80px_rgba(245,158,11,0.15)] animate-fade-in-up animate-stagger-2"
            >
              <div className={`overflow-hidden ${project.document ? 'bg-white p-4 sm:p-5' : 'bg-slate-950'}`}>
                <img
                  src={project.image}
                  alt={project.alt}
                  className={`w-full transition duration-500 group-hover:scale-105 ${
                    project.document ? 'aspect-[4/3] rounded-[1.5rem] border border-slate-200 object-cover' : 'aspect-[4/3] object-cover'
                  }`}
                />
              </div>

              <div className="p-6 sm:p-8">
                <span className="inline-flex rounded-full bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300">
                  {project.badge}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white transition group-hover:text-amber-400 sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-400 transition group-hover:text-slate-300 sm:text-base sm:leading-7">
                  {project.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
