import { useState } from 'react'

const menuItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#sister-concerns', label: 'Sister Concerns' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-amber-400/40 hover:text-amber-600"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-12 z-50 w-[20rem] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.14)] animate-fade-in-down">
          <nav className="p-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-amber-50 hover:text-amber-700"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-2 border-t border-slate-200 px-2 pb-2 pt-4">
              <a
                href="tel:+8801714109516"
                className="mb-2 inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-400/40 hover:text-slate-950"
                onClick={closeMenu}
              >
                Call +880 1714 109 516
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                onClick={closeMenu}
              >
                Get Consultation
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  )
}

export default MobileMenu
