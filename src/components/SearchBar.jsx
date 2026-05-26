import { useState } from 'react'

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      window.dispatchEvent(
        new CustomEvent('archive-search', {
          detail: { query: query.trim() },
        })
      )

      const archiveSection = document.getElementById('archive')
      if (archiveSection) {
        archiveSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.location.hash = 'archive'
      }

      setIsOpen(false)
    }
  }

  return (
    <div className="relative hidden sm:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-amber-500/10 hover:text-amber-600"
        aria-label="Search"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {isOpen && (
        <form
          onSubmit={handleSearch}
          className="absolute right-0 top-12 z-20 w-72 rounded-[1.25rem] border border-slate-200 bg-white p-3 shadow-lg animate-fade-in"
        >
          <input
            type="text"
            placeholder="Search archive records..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:shadow-[0_0_10px_rgba(245,158,11,0.2)]"
            autoFocus
          />
          <button className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
            Search Archive
          </button>
        </form>
      )}
    </div>
  )
}

export default SearchBar
