import SearchBar from './SearchBar'
import MobileMenu from './MobileMenu'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Archive', href: '#archive' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-500 to-orange-500 text-lg font-bold text-white shadow-lg shadow-amber-500/20 transition-all duration-300 group-hover:shadow-amber-500/40">
              O
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-slate-500 transition duration-300 group-hover:text-amber-500 sm:text-xs">
                Onega
              </p>
              <p className="text-lg font-semibold text-slate-950 sm:text-xl">ODCL</p>
              <p className="hidden text-[11px] text-slate-500 lg:block">Onega Development &amp; Construction Ltd.</p>
            </div>
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
            <SearchBar />
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
