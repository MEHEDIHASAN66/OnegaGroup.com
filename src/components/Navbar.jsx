import MobileMenu from './MobileMenu'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Sister Concerns', href: '#sister-concerns' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="group flex items-center">
            <img
              src="/onega-logo.svg"
              alt="Onega Group"
              className="h-14 w-auto object-contain transition duration-300 group-hover:opacity-90 sm:h-16"
            />
          </a>

          <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative transition hover:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="tel:+8801714109516"
              className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-amber-500/40 hover:text-slate-950 sm:inline-flex"
            >
              Call Now
            </a>
            <a
              href="#contact"
              className="hidden items-center justify-center rounded-full bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 hover:shadow-amber-500/40 sm:inline-flex sm:px-5 sm:py-3"
            >
              Get Consultation
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
