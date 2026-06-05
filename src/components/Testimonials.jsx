import { useEffect, useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Engr. Mohammad Habib',
    role: 'Project Manager, Bangladesh Water Development Board',
    company: 'BWDB',
    testimonial: 'Onega Group\'s expertise in soil investigation and site supervision was instrumental in the success of our infrastructure project. Their attention to detail and professionalism exceeded our expectations.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Dr. Fahmida Akter',
    role: 'Chief Engineer, Municipal Authority',
    company: 'City Development Corp',
    testimonial: 'Working with Onega Group was a seamless experience. Their team\'s commitment to quality and safety standards set them apart. We\'ve recommended them to multiple government agencies.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Mr. Rajesh Kumar Singh',
    role: 'Procurement Officer, State Infrastructure',
    company: 'National Highway Authority',
    testimonial: 'Exceptional technical knowledge and reliable project execution. Onega Group delivered our road infrastructure project on time and within budget. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Ms. Priya Sinha',
    role: 'Director of Operations, Private Contractor',
    company: 'BuildCorp Bangladesh',
    testimonial: 'Their pile load testing and field supervision services were critical for our bridge construction project. The team\'s professionalism and technical expertise made a real difference.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Engr. Kamal Ahmed',
    role: 'Site Director, Mega Infrastructure',
    company: 'Construction Excellence Ltd',
    testimonial: 'Onega Group\'s commitment to safety protocols and quality assurance is outstanding. They are not just a service provider but a trusted partner in our projects.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360771-9852ef158dba?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Mrs. Asha Patel',
    role: 'Project Lead, Infrastructure Development',
    company: 'Regional Development Board',
    testimonial: 'Outstanding service quality and technical expertise. Onega Group consistently delivers projects that meet and exceed our standards. A reliable partner for infrastructure development.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
  },
]

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setAutoPlay(false)
  }

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950/10 to-slate-950 px-6 py-20 text-white animate-fade-in sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up animate-stagger-1">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Client Stories</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Hear from our satisfied clients about their experience working with Onega Group on critical infrastructure projects.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-14 relative">
          {/* Main Testimonial */}
          <div className="mx-auto max-w-4xl animate-fade-in-up animate-stagger-2">
            <div className="group relative overflow-hidden rounded-[3rem] border border-amber-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl shadow-amber-500/10 transition-all duration-500 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/20 sm:p-12">
              {/* Quote Icon */}
              <div className="absolute top-4 right-6 text-amber-500/20 text-8xl font-bold">
                "
              </div>

              {/* Testimonial Content */}
              <div className="relative">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array(testimonials[currentIndex].rating)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg leading-8 text-slate-100 mb-8 italic">
                  "{testimonials[currentIndex].testimonial}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
                  />
                  <div>
                    <h3 className="font-bold text-white">{testimonials[currentIndex].name}</h3>
                    <p className="text-sm text-amber-400">{testimonials[currentIndex].role}</p>
                    <p className="text-sm text-slate-400">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-10 flex items-center justify-between gap-4 sm:justify-center sm:gap-8">
            <button
              onClick={handlePrev}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-amber-500/30 text-amber-400 hover:border-amber-500 hover:bg-amber-500/10 transition-all duration-300 group"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setAutoPlay(false)
                  }}
                  className={`h-2 transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-amber-500'
                      : 'w-2 bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-amber-500/30 text-amber-400 hover:border-amber-500 hover:bg-amber-500/10 transition-all duration-300 group"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Testimonials Count */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-400">
              <span className="text-amber-400 font-bold">{currentIndex + 1}</span> of{' '}
              <span className="text-amber-400 font-bold">{testimonials.length}</span> testimonials
            </p>
          </div>
        </div>

        {/* Mini Thumbnails */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => {
                setCurrentIndex(index)
                setAutoPlay(false)
              }}
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-amber-500 scale-105' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="aspect-square w-full object-cover transition duration-300 group-hover:scale-110"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
