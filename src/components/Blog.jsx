import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'Advanced Soil Testing Techniques for Foundation Design',
    excerpt: 'Learn about the latest methods in soil investigation and how they impact foundation design decisions.',
    date: 'May 20, 2026',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
    author: 'Md Ashraf Uddin',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Project Update: Padma Link Infrastructure Phase Completion',
    excerpt: 'Major milestone achieved in the Padma Link project. Our team successfully completed Phase 2 ahead of schedule.',
    date: 'May 18, 2026',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1581092918484-404ad114a655?auto=format&fit=crop&w=800&q=80',
    author: 'Md. Hamidur Rahman',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Quality Assurance in Civil Construction: Best Practices',
    excerpt: 'Understanding QA/QC protocols and how ODCL ensures the highest standards in every project delivery.',
    date: 'May 15, 2026',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1581092160562-40fed08a5dca?auto=format&fit=crop&w=800&q=80',
    author: 'Saidur Rahman',
    readTime: '6 min read',
  },
]

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'News', 'Technical', 'Project Updates']
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <section id="blog" className="relative overflow-hidden bg-slate-50 px-6 py-20 animate-fade-in sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up animate-stagger-1">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-500">Latest Updates</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
            News & Technical Insights
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Stay updated with the latest industry insights, project news, and technical knowledge from our team.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-in-up animate-stagger-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-500/50 hover:text-amber-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up animate-stagger-3">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_100px_rgba(245,158,11,0.2)]"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                  <span>{post.date}</span>
                  <span className="text-amber-600 font-semibold">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-950 transition group-hover:text-amber-600 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-slate-600 text-sm leading-6 line-clamp-2 group-hover:text-slate-700 transition">
                  {post.excerpt}
                </p>

                {/* Divider */}
                <div className="my-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div className="text-sm">
                    <p className="font-semibold text-slate-950">{post.author}</p>
                    <p className="text-slate-500 text-xs">Author</p>
                  </div>
                  <a
                    href={`#blog-${post.id}`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 hover:bg-amber-500 hover:text-white transition group-hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="#blog"
            className="inline-flex items-center justify-center px-8 py-3 bg-amber-500 text-white rounded-full font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
