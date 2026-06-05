const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Archive', href: '#archive' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-amber-300">Onega Group</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Onega Development &amp; Construction Ltd.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Civil engineering, survey, soil testing, piling, and documented field delivery backed by real company records and technical team credentials.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Quick links</p>
            <div className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-amber-300">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Direct contact</p>
            <div className="mt-5 grid gap-3 text-sm">
              <a href="tel:+8801714109516" className="transition hover:text-amber-300">
                +880 1714 109 516
              </a>
              <a href="tel:+880244611433" className="transition hover:text-amber-300">
                +880 2 4461 1433
              </a>
              <a href="mailto:odclbd@gmail.com" className="transition hover:text-amber-300">
                odclbd@gmail.com
              </a>
              <a href="https://wa.me/8801714109516" target="_blank" rel="noreferrer" className="transition hover:text-amber-300">
                WhatsApp inquiry
              </a>
              <a
                href="https://maps.google.com/?q=8/2%20Paribagh%20Motaleb%20Tower%20Shahbagh%20Dhaka-1000"
                target="_blank"
                rel="noreferrer"
                className="leading-6 transition hover:text-amber-300"
              >
                8/2, Paribagh, Motaleb Tower, Shahbagh, Dhaka-1000
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Onega Development &amp; Construction Ltd.</p>
          <p className="text-slate-500">All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
