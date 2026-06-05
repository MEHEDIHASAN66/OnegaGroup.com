const services = [
  {
    title: 'Sub-Soil Investigation',
    icon: 'SI',
    description: 'Field drilling, sampling, and reporting support clearer structural and foundation decisions before execution starts.',
  },
  {
    title: 'Pile Load Testing',
    icon: 'PL',
    description: 'Load testing services help validate pile performance, capacity, and site-readiness with documented results.',
  },
  {
    title: 'Topographic Survey',
    icon: 'TS',
    description: 'Accurate survey work supports planning, tender preparation, site mapping, and field coordination.',
  },
  {
    title: 'Bridge Construction',
    icon: 'BC',
    description: 'Onega Group supports bridge-related civil work with site-focused execution and practical construction oversight.',
  },
  {
    title: 'Offshore Construction',
    icon: 'OC',
    description: 'Specialized construction support extends to demanding environments where coordination and safety matter most.',
  },
  {
    title: 'Architectural Design',
    icon: 'AD',
    description: 'Design input helps move projects from concept and planning toward organized, buildable documentation.',
  },
]

function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 px-6 sm:px-10 animate-fade-in relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up animate-stagger-1">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-500">What we deliver</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
            Core engineering services for real project conditions.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Onega Group provides practical technical support from early investigation to field execution so clients can make faster and safer decisions on site.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(15,23,42,0.15)] hover:border-amber-500/50 animate-fade-in-up animate-stagger-2 group cursor-pointer transition"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-500/10 text-2xl font-semibold text-amber-500 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-950 group-hover:text-amber-600 transition">{service.title}</h3>
              <p className="mt-4 text-slate-600 group-hover:text-slate-700 transition">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
