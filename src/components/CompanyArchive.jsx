import { useDeferredValue, useEffect, useState } from 'react'

const previewImages = import.meta.glob('../assets/pdf-previews/*.jpg', {
  eager: true,
  import: 'default',
})

const companyProfilePdf = '/docs/odcl-company-profile.pdf'
const projectDirectoryPdf = '/docs/project-1.pdf'

function getPreview(fileName) {
  return previewImages[`../assets/pdf-previews/${fileName}`]
}

const archiveGroups = [
  {
    id: 'profile',
    eyebrow: 'Company profile',
    title: 'Core company profile and introduction pages',
    description: 'These pages cover the ODCL profile opening, management message, and foundational company narrative from the uploaded archive.',
    items: [
      { file: 'doc2-page-1.jpg', title: 'Company cover page', tag: 'Profile', note: 'Opening cover of the company profile.' },
      { file: 'doc2-page-2.jpg', title: 'Index page', tag: 'Profile', note: 'Main table of contents from the profile.' },
      { file: 'doc2-page-3.jpg', title: 'Managing director message', tag: 'Leadership', note: 'Formal message and company positioning.' },
      { file: 'doc2-page-4.jpg', title: 'Preface', tag: 'Company note', note: 'Introductory company background and context.' },
      { file: 'doc2-page-5.jpg', title: 'Vision and mission', tag: 'Vision', note: 'Core mission, service commitment, and growth direction.' },
      { file: 'doc2-page-6.jpg', title: 'Business and background', tag: 'Profile', note: 'Business formation context and civil engineering focus summary.' },
      { file: 'doc2-page-7.jpg', title: 'Company qualification details', tag: 'Profile', note: 'Structured company information and qualification details from the profile.' },
      { file: 'doc2-page-8.jpg', title: 'Management listing', tag: 'Leadership', note: 'Leadership and management roles with experience references.' },
      { file: 'doc2-page-9.jpg', title: 'Surveyor team listing', tag: 'Team CV', note: 'Survey discipline team profiles and experience summaries.' },
      { file: 'doc2-page-10.jpg', title: 'Scope of services', tag: 'Service scope', note: 'Detailed list of offered testing, survey, and engineering services.' },
      { file: 'doc2-page-11.jpg', title: 'Equipment and machinery', tag: 'Equipment', note: 'Field equipment records with quantity and usage details.' },
      { file: 'doc2-page-12.jpg', title: 'Current and completed projects 1', tag: 'Project record', note: 'Project list with authority, contractor, and status context.' },
      { file: 'doc2-page-13.jpg', title: 'Current and completed projects 2', tag: 'Project record', note: 'Continuation of delivered and running project records.' },
    ],
  },
  {
    id: 'credentials',
    eyebrow: 'Credentials',
    title: 'Licenses, registrations, approvals, and work records',
    description: 'Official records and government-facing documents that support ODCL\'s company credibility and field delivery history.',
    items: [
      { file: 'doc2-page-14.jpg', title: 'Trade license', tag: 'License', note: 'City corporation trade license page.' },
      { file: 'doc2-page-15.jpg', title: 'Certificate of incorporation', tag: 'Registration', note: 'Company incorporation certificate.' },
      { file: 'doc2-page-16.jpg', title: 'Income tax certificate', tag: 'Tax', note: 'Tax compliance record from the archive.' },
      { file: 'doc2-page-17.jpg', title: 'VAT registration certificate', tag: 'VAT', note: 'National Board of Revenue VAT record.' },
      { file: 'doc2-page-18.jpg', title: 'Invitation for signing contract', tag: 'Project record', note: 'Official communication tied to project signing.' },
      { file: 'doc2-page-19.jpg', title: 'Topographic survey contract letter', tag: 'Survey work', note: 'Project communication for field survey scope.' },
      { file: 'doc2-page-20.jpg', title: 'Work order and implementation letter', tag: 'Work order', note: 'Award and implementation record from project files.' },
      { file: 'doc2-page-21.jpg', title: 'Supporting field report letter', tag: 'Submission', note: 'Reference letter linked to submitted test reports.' },
      { file: 'doc2-page-22.jpg', title: 'Completion certificate', tag: 'Completion', note: 'Formal project completion certificate.' },
      { file: 'doc2-page-23.jpg', title: 'University work order', tag: 'Institutional work', note: 'Work order from an institutional client.' },
    ],
  },
  {
    id: 'team-records',
    eyebrow: 'Team records',
    title: 'Technical personnel records and field documentation',
    description: 'Profile snapshots for the technical team, along with field visuals and page-based archive sheets from the uploaded documents.',
    items: [
      { file: 'doc2-page-24.jpg', title: 'CAD operator profile', tag: 'Team CV', note: 'Technical record for CAD operations support.' },
      { file: 'doc2-page-25.jpg', title: 'Assistant surveyor profile', tag: 'Team CV', note: 'Survey support profile page.' },
      { file: 'doc2-page-26.jpg', title: 'Assistant engineer profile', tag: 'Team CV', note: 'Assistant engineer profile record.' },
      { file: 'doc2-page-27.jpg', title: 'Site supervisor profile', tag: 'Team CV', note: 'Site supervision profile page.' },
      { file: 'doc2-page-28.jpg', title: 'Site engineer profile', tag: 'Team CV', note: 'Field engineering team record.' },
      { file: 'doc2-page-29.jpg', title: 'Structural engineer profile', tag: 'Team CV', note: 'Structural engineering profile page.' },
      { file: 'doc2-page-30.jpg', title: 'Assistant engineer profile 2', tag: 'Team CV', note: 'Mustaq Ahmed Shajib profile record from the archive.' },
      { file: 'doc2-page-31.jpg', title: 'Lab technician profile', tag: 'Team CV', note: 'Testing and laboratory role profile.' },
      { file: 'doc2-page-32.jpg', title: 'Surveyor profile', tag: 'Team CV', note: 'Survey team profile page.' },
      { file: 'doc2-page-33.jpg', title: 'Site engineer profile 2', tag: 'Team CV', note: 'Additional site engineer profile record.' },
      { file: 'doc2-page-34.jpg', title: 'Field project photo page', tag: 'Field photo', note: 'Page showing multiple project field photographs.' },
      { file: 'project1-page-1.jpg', title: 'Industry reference directory 1', tag: 'Directory', note: 'Supporting external directory reference.' },
      { file: 'project1-page-2.jpg', title: 'Industry reference directory 2', tag: 'Directory', note: 'Second page of company and industry references.' },
      { file: 'project1-page-3.jpg', title: 'Industry reference directory 3', tag: 'Directory', note: 'Third page of directory-style reference records.' },
      { file: 'contact-sheet.jpg', title: 'Contact sheet overview', tag: 'Overview', note: 'Composite overview of multiple uploaded pages.' },
      { file: 'doc2-sheet-a.jpg', title: 'Credential sheet A', tag: 'Overview', note: 'Composite sheet summarizing credential pages.' },
      { file: 'doc2-sheet-b.jpg', title: 'Credential sheet B', tag: 'Overview', note: 'Composite sheet summarizing team profile pages.' },
      { file: 'doc2-sheet-c.jpg', title: 'Credential sheet C', tag: 'Overview', note: 'Composite sheet summarizing team and field photo pages.' },
    ],
  },
]

const archiveFilters = [
  { id: 'all', label: 'All records' },
  { id: 'profile', label: 'Profile pages' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'team-cv', label: 'Team CVs' },
  { id: 'field-photo', label: 'Field photos' },
  { id: 'directory', label: 'Directories' },
  { id: 'overview', label: 'Overview sheets' },
]

const sortOptions = [
  { id: 'archive-order', label: 'Archive order' },
  { id: 'title-asc', label: 'Title A-Z' },
  { id: 'title-desc', label: 'Title Z-A' },
  { id: 'tag-asc', label: 'Tag A-Z' },
]

const itemsPerPage = 8

function matchesFilter(groupId, item, filterId) {
  if (filterId === 'all') return true
  if (filterId === 'profile') return groupId === 'profile'
  if (filterId === 'credentials') return groupId === 'credentials'
  if (filterId === 'team-cv') return item.tag === 'Team CV'
  if (filterId === 'field-photo') return item.tag === 'Field photo'
  if (filterId === 'directory') return item.tag === 'Directory'
  if (filterId === 'overview') return item.tag === 'Overview'
  return false
}

function matchesSearch(item, group, query) {
  if (!query) return true

  const searchableText = [
    item.title,
    item.note,
    item.file,
    item.tag,
    group.title,
    group.eyebrow,
  ]
    .join(' ')
    .toLowerCase()

  return searchableText.includes(query)
}

function sortArchiveItems(items, sortBy) {
  const nextItems = [...items]

  if (sortBy === 'title-asc') {
    nextItems.sort((left, right) => left.title.localeCompare(right.title))
    return nextItems
  }

  if (sortBy === 'title-desc') {
    nextItems.sort((left, right) => right.title.localeCompare(left.title))
    return nextItems
  }

  if (sortBy === 'tag-asc') {
    nextItems.sort((left, right) => {
      const tagCompare = left.tag.localeCompare(right.tag)
      if (tagCompare !== 0) return tagCompare
      return left.title.localeCompare(right.title)
    })
    return nextItems
  }

  nextItems.sort((left, right) => left.archiveOrder - right.archiveOrder)
  return nextItems
}

function CompanyArchive() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('archive-order')
  const [currentPage, setCurrentPage] = useState(1)
  const deferredSearchQuery = useDeferredValue(searchQuery.trim().toLowerCase())

  const filterCounts = archiveFilters.reduce((counts, filter) => {
    counts[filter.id] = archiveGroups.reduce((total, group) => {
      return total + group.items.filter((item) => matchesFilter(group.id, item, filter.id)).length
    }, 0)
    return counts
  }, {})

  const allArchiveItems = archiveGroups.flatMap((group, groupIndex) =>
    group.items.map((item, itemIndex) => ({
      ...item,
      groupId: group.id,
      groupTitle: group.title,
      groupEyebrow: group.eyebrow,
      image: getPreview(item.file),
      archiveOrder: groupIndex * 100 + itemIndex,
    }))
  )

  const archiveStats = [
    { label: 'Archive pages visible', value: String(allArchiveItems.length) },
    { label: 'Credential records', value: String(filterCounts.credentials) },
    { label: 'Team profile pages', value: String(filterCounts['team-cv']) },
  ]

  const filteredItems = sortArchiveItems(
    allArchiveItems.filter(
      (item) =>
        matchesFilter(item.groupId, item, activeFilter) &&
        matchesSearch(
          {
            title: item.title,
            note: item.note,
            file: item.file,
            tag: item.tag,
          },
          {
            title: item.groupTitle,
            eyebrow: item.groupEyebrow,
          },
          deferredSearchQuery
        )
    ),
    sortBy
  )

  const filteredItemCount = filteredItems.length
  const totalPages = Math.max(1, Math.ceil(filteredItemCount / itemsPerPage))
  const safeCurrentPage = Math.min(currentPage, totalPages)
  const pageStart = (safeCurrentPage - 1) * itemsPerPage
  const paginatedItems = filteredItems.slice(pageStart, pageStart + itemsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [activeFilter, deferredSearchQuery, sortBy])

  useEffect(() => {
    function handleArchiveSearch(event) {
      const nextQuery = event.detail?.query ?? ''
      setActiveFilter('all')
      setSearchQuery(nextQuery)
      setSortBy('archive-order')
      setCurrentPage(1)
    }

    window.addEventListener('archive-search', handleArchiveSearch)
    return () => window.removeEventListener('archive-search', handleArchiveSearch)
  }, [])

  return (
    <section id="archive" className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white animate-fade-in sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.12),transparent_30%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="animate-fade-in-up animate-stagger-1">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Document archive</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Uploaded company records, profile pages, and field documents now live on the site
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Instead of keeping the uploaded material hidden in assets only, this section surfaces the actual profile pages, certificates, field records, and directory pages as a browsable archive.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 animate-fade-in-up animate-stagger-2">
            {archiveStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Browse archive</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Filter by document type or download the original PDF sources</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Showing {filteredItemCount} archive items for the current view. You can preview individual pages, search by keyword, or download both source PDFs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={companyProfilePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-400/40 hover:text-amber-300"
              >
                Open Company PDF
              </a>
              <a
                href={companyProfilePdf}
                download="odcl-company-profile.pdf"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Download Company PDF
              </a>
              <a
                href={projectDirectoryPdf}
                download="project-1.pdf"
                className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20 hover:text-white"
              >
                Download Project PDF
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.95fr]">
            <label className="block">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Search archive</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by title, tag, file name, or note"
                className="w-full rounded-full border border-white/10 bg-slate-900/80 px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400/40 focus:ring-2 focus:ring-amber-400/20"
              />
            </label>

            <div className="grid gap-4">
              <label className="block">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Sort records</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="w-full rounded-full border border-white/10 bg-slate-900/80 px-5 py-4 text-sm text-white outline-none transition focus:border-amber-400/40 focus:ring-2 focus:ring-amber-400/20"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Quick counters</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/60 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Profile pages</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{filterCounts.profile}</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/60 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Credentials</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{filterCounts.credentials}</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/60 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Team records</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{filterCounts['team-cv']}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {archiveFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === filter.id
                    ? 'bg-amber-500 text-slate-950'
                    : 'border border-white/10 bg-white/5 text-slate-300 hover:border-amber-400/40 hover:text-amber-300'
                }`}
              >
                {filter.label} ({filterCounts[filter.id]})
              </button>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 rounded-[1.5rem] border border-white/10 bg-slate-900/50 px-5 py-4 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Page {safeCurrentPage} of {totalPages}
            </p>
            <p>
              Showing {filteredItemCount === 0 ? 0 : pageStart + 1}-{Math.min(pageStart + itemsPerPage, filteredItemCount)} of {filteredItemCount} records
            </p>
          </div>
        </div>

        <div className="mt-14 space-y-12">
          {filteredItemCount === 0 ? (
            <div className="rounded-[2rem] border border-dashed border-white/15 bg-white/5 px-6 py-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">No records found</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">No archive pages match this filter and search</h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                Try a different keyword, clear the search box, or switch back to another archive category to see more document records.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-400/40 hover:text-amber-300"
                >
                  Clear Search
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter('all')
                    setSearchQuery('')
                  }}
                  className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Reset View
                </button>
              </div>
            </div>
          ) : null}

          {filteredItemCount > 0 ? (
            <div className="animate-fade-in-up animate-stagger-2">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Paginated results</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Sorted archive records ready to preview or download</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                    Use the filter, search, sort, and page controls together to quickly reach the exact document you want.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {paginatedItems.map((item) => (
                  <article
                    key={item.file}
                    onClick={() => setSelectedItem(item)}
                    className="group cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(15,23,42,0.2)] transition duration-300 hover:-translate-y-2 hover:border-amber-400/50 hover:bg-white/10"
                  >
                    <div className="overflow-hidden bg-white p-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full rounded-[1.2rem] border border-slate-200 transition duration-500 group-hover:scale-[1.03] ${
                          item.tag === 'Overview' ? 'aspect-[4/5] object-cover' : 'aspect-[4/5] object-cover object-top'
                        }`}
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                          {item.tag}
                        </span>
                        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                          {item.groupEyebrow}
                        </span>
                      </div>
                      <h4 className="mt-4 text-lg font-semibold text-white">{item.title}</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{item.note}</p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation()
                            setSelectedItem(item)
                          }}
                          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-amber-400/40 hover:text-amber-300"
                        >
                          Preview
                        </button>
                        <a
                          href={item.image}
                          download={item.file}
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex items-center justify-center rounded-full border border-amber-400/20 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200 transition hover:bg-amber-500/20"
                        >
                          Download JPG
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  disabled={safeCurrentPage === 1}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40 hover:border-amber-400/40 hover:text-amber-300"
                >
                  Previous Page
                </button>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition ${
                        safeCurrentPage === pageNumber
                          ? 'bg-amber-500 text-slate-950'
                          : 'border border-white/10 bg-white/5 text-white hover:border-amber-400/40 hover:text-amber-300'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                  disabled={safeCurrentPage === totalPages}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40 hover:border-amber-400/40 hover:text-amber-300"
                >
                  Next Page
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {selectedItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative grid w-full max-w-6xl gap-5 rounded-[2rem] border border-white/10 bg-slate-900 p-4 shadow-[0_40px_120px_rgba(15,23,42,0.5)] lg:grid-cols-[1.2fr_0.8fr] lg:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-amber-400/40 hover:text-amber-300"
            >
              x
            </button>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white p-3">
              <img src={selectedItem.image} alt={selectedItem.title} className="max-h-[75vh] w-full rounded-[1.2rem] object-contain" />
            </div>

            <div className="flex flex-col justify-center p-2 pr-8">
              <span className="inline-flex w-fit rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">
                {selectedItem.tag}
              </span>
              <h3 className="mt-5 text-3xl font-semibold text-white">{selectedItem.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{selectedItem.note}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.24em] text-slate-500">{selectedItem.file}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={selectedItem.image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-400/40 hover:text-amber-300"
                >
                  Open Image
                </a>
                <a
                  href={selectedItem.image}
                  download={selectedItem.file}
                  className="inline-flex items-center justify-center rounded-full border border-amber-400/20 bg-amber-500/10 px-5 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-500/20"
                >
                  Download JPG
                </a>
                <a
                  href={companyProfilePdf}
                  download="odcl-company-profile.pdf"
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Download Company PDF
                </a>
                <a
                  href={projectDirectoryPdf}
                  download="project-1.pdf"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20 hover:text-white"
                >
                  Download Project PDF
                </a>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
                This modal view helps present the uploaded document clearly without forcing visitors to download the original file first.
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default CompanyArchive
