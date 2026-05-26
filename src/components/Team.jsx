import cadOperatorPhoto from '../assets/pdf-extracted/page-24-img-1.jpeg'
import assistantSurveyorPhoto from '../assets/pdf-extracted/page-25-img-1.jpeg'
import assistantEngineerPhoto from '../assets/pdf-extracted/page-26-img-1.jpeg'
import siteSupervisorPhoto from '../assets/pdf-extracted/page-27-img-1.jpeg'
import siteEngineerPhoto from '../assets/pdf-extracted/page-28-img-1.jpeg'
import structuralEngineerPhoto from '../assets/pdf-extracted/page-29-img-1.jpeg'
import mustaqEngineerProfile from '../assets/pdf-previews/doc2-page-30.jpg'
import labTechnicianPhoto from '../assets/pdf-extracted/page-31-img-1.jpeg'
import surveyorPhoto from '../assets/pdf-extracted/page-32-img-1.jpeg'
import secondSiteEngineerPhoto from '../assets/pdf-extracted/page-33-img-1.jpeg'

const team = [
  { name: 'Md Ashraf Uddin', role: 'CAD Operator', image: cadOperatorPhoto, specialty: 'Design & Planning', badge: 'CAD' },
  { name: 'Md. Dulal Hossain', role: 'Asst. Surveyor', image: assistantSurveyorPhoto, specialty: 'Survey Support', badge: 'Survey' },
  { name: 'Md. Hamidur Rahman', role: 'Asst. Engineer', image: assistantEngineerPhoto, specialty: 'Site Supervision', badge: 'Eng.' },
  { name: 'Md. Jalal Uddin', role: 'Site Supervisor', image: siteSupervisorPhoto, specialty: 'Site Coordination', badge: 'Lead' },
  { name: 'Lutfar', role: 'Site Engineer', image: siteEngineerPhoto, specialty: 'Field Operations', badge: 'Field' },
  { name: 'Md. Mostafa Kamal', role: 'Structural Engineer', image: structuralEngineerPhoto, specialty: 'Structural Assessment', badge: 'Struct' },
  { name: 'Mustaq Ahmed Shajib', role: 'Asst. Engineer', image: mustaqEngineerProfile, specialty: 'Execution Support', badge: 'Eng.' },
  { name: 'Md. Shakil', role: 'Lab Technician', image: labTechnicianPhoto, specialty: 'Materials Testing', badge: 'Lab' },
  { name: 'Md. Shohel Rana', role: 'Surveyor', image: surveyorPhoto, specialty: 'Land Surveying', badge: 'Survey' },
  { name: 'Saidur Rahman', role: 'Site Engineer', image: secondSiteEngineerPhoto, specialty: 'Quality Control', badge: 'QC' },
]

function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-white px-6 py-20 animate-fade-in sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up animate-stagger-1">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-500">Technical team</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Expert professionals delivering excellence</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our dedicated team brings years of expertise and hands-on experience to every project.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:gap-10 xl:grid-cols-3">
          {team.map((member, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_100px_rgba(245,158,11,0.2)] animate-fade-in-up animate-stagger-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 opacity-0 transition duration-500 pointer-events-none group-hover:opacity-100" />

              <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-amber-500/10 transition duration-500 group-hover:from-amber-500/40 group-hover:via-amber-500/10" />

                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute top-4 right-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg opacity-0 transition duration-300 transform group-hover:scale-110 group-hover:opacity-100">
                  {member.badge}
                </div>
              </div>

              <div className="relative p-6 text-center sm:p-8">
                <h3 className="text-xl font-bold tracking-tight text-slate-950 transition group-hover:text-amber-600">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">
                  {member.role}
                </p>
                <p className="mt-3 text-sm font-medium text-slate-600 transition group-hover:text-slate-700">
                  {member.specialty}
                </p>

                <div className="mt-4 mx-auto h-1 w-12 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="mt-5 flex justify-center gap-3 opacity-0 transition duration-300 transform translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                  <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-xs text-amber-600 transition hover:bg-amber-500 hover:text-white">
                    L
                  </a>
                  <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-xs text-amber-600 transition hover:bg-amber-500 hover:text-white">
                    E
                  </a>
                  <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-xs text-amber-600 transition hover:bg-amber-500 hover:text-white">
                    C
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
