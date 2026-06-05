import { useState } from 'react'

const companyEmail = 'odclbd@gmail.com'
const companyPhone = '+8801714109516'
const companyTelephone = '+880244611433'
const whatsappPhone = '8801714109516'

const contactItems = [
  {
    label: 'Office',
    value: '8/2, Paribagh, Motaleb Tower, Shahbagh, Dhaka-1000',
    href: 'https://maps.google.com/?q=8/2%20Paribagh%20Motaleb%20Tower%20Shahbagh%20Dhaka-1000',
  },
  {
    label: 'Phone',
    value: '+880 1714 109 516',
    href: `tel:${companyPhone}`,
  },
  {
    label: 'Telephone',
    value: '+880 2 4461 1433',
    href: `tel:${companyTelephone}`,
  },
  {
    label: 'Email',
    value: companyEmail,
    href: `mailto:${companyEmail}`,
  },
  {
    label: 'Website',
    value: 'onegagroup.com',
    href: 'https://onegagroup.com',
  },
]

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
}

function buildInquiryMessage(formData) {
  return [
    'Hello Onega Group,',
    '',
    'I would like to discuss a project inquiry.',
    '',
    `Name: ${formData.name}`,
    `Email: ${formData.email || 'Not provided'}`,
    `Phone: ${formData.phone || 'Not provided'}`,
    `Project Type: ${formData.projectType}`,
    '',
    'Project Details:',
    formData.message,
  ].join('\n')
}

function Contact() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })

  function validateForm(data) {
    const nextErrors = {}

    if (!data.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!data.projectType.trim()) nextErrors.projectType = 'Please enter your project type.'
    if (!data.message.trim()) nextErrors.message = 'Please share a short project brief.'
    if (!data.email.trim() && !data.phone.trim()) {
      nextErrors.contact = 'Please provide an email address or phone number.'
    }

    return nextErrors
  }

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => {
      const nextErrors = { ...current }
      delete nextErrors[name]
      delete nextErrors.contact
      return nextErrors
    })

    if (status.message) {
      setStatus({ type: '', message: '' })
    }
  }

  function handleEmailSubmit(event) {
    event.preventDefault()

    const nextErrors = validateForm(formData)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus({ type: 'error', message: 'Please complete the required fields before sending.' })
      return
    }

    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`)
    const body = encodeURIComponent(buildInquiryMessage(formData))
    window.location.href = `mailto:${companyEmail}?subject=${subject}&body=${body}`

    setErrors({})
    setStatus({
      type: 'success',
      message: 'Your email app should open with the inquiry draft. Please review it and send.',
    })
  }

  function handleWhatsAppSend() {
    const nextErrors = validateForm(formData)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus({ type: 'error', message: 'Please complete the required fields before sending.' })
      return
    }

    const text = encodeURIComponent(buildInquiryMessage(formData))
    window.open(`https://wa.me/${whatsappPhone}?text=${text}`, '_blank', 'noopener,noreferrer')

    setErrors({})
    setStatus({
      type: 'success',
      message: 'WhatsApp opened in a new tab with your inquiry message ready to send.',
    })
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 px-6 py-20 animate-fade-in sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl animate-fade-in-up animate-stagger-1 lg:mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-500">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
            Let&apos;s discuss your next project with clarity and speed
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Share your scope, project location, or technical requirement and our team can continue the conversation with the right next steps.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-10">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] transition hover:border-amber-500/30 hover:shadow-[0_40px_100px_rgba(245,158,11,0.1)] sm:p-8 lg:p-10">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
                Contact details
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                Dhaka office
              </span>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Reach out for a consultation, site visit discussion, or technical proposal. We&apos;ll have a much better starting point if you include project type, location, and timeline.
            </p>

            <div className="mt-8 grid gap-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-amber-500/40 hover:bg-white"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 transition group-hover:text-amber-600">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-900 sm:text-base">{item.value}</p>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-slate-700">
              Preferred inquiry:
              Include your service type, site location, and expected schedule so the reply can be more specific.
            </div>
          </div>

          <form
            className="rounded-[2rem] border border-slate-800 bg-slate-950 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.15)] transition hover:border-amber-500/30 hover:shadow-[0_40px_100px_rgba(245,158,11,0.1)] sm:p-8 lg:p-10"
            onSubmit={handleEmailSubmit}
            noValidate
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                Inquiry form
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Project briefing
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">Send your project requirements</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
              Use the form for civil works, testing requests, survey coordination, or general business inquiries.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-3 block text-sm font-semibold text-slate-100">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-amber-500 focus:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  placeholder="Enter your name"
                />
                {errors.name ? <p className="mt-2 text-sm text-rose-300">{errors.name}</p> : null}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className="mb-3 block text-sm font-semibold text-slate-100">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-amber-500 focus:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-3 block text-sm font-semibold text-slate-100">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-amber-500 focus:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              {errors.contact ? <p className="text-sm text-rose-300">{errors.contact}</p> : null}

              <div>
                <label htmlFor="contact-project-type" className="mb-3 block text-sm font-semibold text-slate-100">
                  Project Type
                </label>
                <input
                  id="contact-project-type"
                  name="projectType"
                  type="text"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-amber-500 focus:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  placeholder="Soil testing, survey, piling, construction..."
                />
                {errors.projectType ? <p className="mt-2 text-sm text-rose-300">{errors.projectType}</p> : null}
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-3 block text-sm font-semibold text-slate-100">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-amber-500 focus:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  placeholder="Tell us about your requirements, location, and expected timeline"
                ></textarea>
                {errors.message ? <p className="mt-2 text-sm text-rose-300">{errors.message}</p> : null}
              </div>

              {status.message ? (
                <div
                  className={`rounded-[1.5rem] px-5 py-4 text-sm leading-6 ${
                    status.type === 'success'
                      ? 'border border-emerald-400/30 bg-emerald-500/10 text-emerald-200'
                      : 'border border-rose-400/30 bg-rose-500/10 text-rose-200'
                  }`}
                >
                  {status.message}
                </div>
              ) : null}

              <div className="grid gap-3 sm:grid-cols-2">
                <button className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-4 text-base font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/40">
                  Send by Email
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="inline-flex w-full items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 py-4 text-base font-semibold text-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500/20 hover:text-white"
                >
                  Send by WhatsApp
                </button>
              </div>

              <p className="text-sm leading-6 text-slate-400">
                Email opens your default mail app. WhatsApp opens a ready-made message in a new tab.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
