import { useState } from 'react'
import managingDirectorPhoto from '../assets/pdf-extracted/page-3-img-1.jpeg'
import cadOperatorPhoto from '../assets/pdf-extracted/page-24-img-1.jpeg'
import assistantSurveyorPhoto from '../assets/pdf-extracted/page-25-img-1.jpeg'
import assistantEngineerPhoto from '../assets/pdf-extracted/page-26-img-1.jpeg'
import siteSupervisorPhoto from '../assets/pdf-extracted/page-27-img-1.jpeg'
import siteEngineerPhoto from '../assets/pdf-extracted/page-28-img-1.jpeg'
import structuralEngineerPhoto from '../assets/pdf-extracted/page-29-img-1.jpeg'
import mustaqEngineerProfile from '../assets/pdf-previews/doc2-page-30.jpg'
import labTechnicianPhoto from '../assets/pdf-extracted/page-31-img-1.jpeg'
import surveyorPhoto from '../assets/pdf-extracted/page-32-img-1.jpeg'
import secondSiteEngineerPhoto from '../assets/pdf-extracted/page-33-img-1.jpeg'
import fieldRigImage from '../assets/pdf-extracted/page-34-img-1.jpeg'
import crewInspectionImage from '../assets/pdf-extracted/page-34-img-2.jpeg'
import fieldMobilizationImage from '../assets/pdf-extracted/page-34-img-3.jpeg'

const galleryImages = [
  {
    src: managingDirectorPhoto,
    alt: 'Managing director portrait',
    title: 'Managing Director',
    subtitle: 'Company profile archive',
  },
  {
    src: cadOperatorPhoto,
    alt: 'Md Ashraf Uddin portrait',
    title: 'Md Ashraf Uddin',
    subtitle: 'CAD Operator',
  },
  {
    src: assistantSurveyorPhoto,
    alt: 'Md. Dulal Hossain portrait',
    title: 'Md. Dulal Hossain',
    subtitle: 'Asst. Surveyor',
  },
  {
    src: assistantEngineerPhoto,
    alt: 'Md. Hamidur Rahman portrait',
    title: 'Md. Hamidur Rahman',
    subtitle: 'Asst. Engineer',
  },
  {
    src: siteSupervisorPhoto,
    alt: 'Md. Jalal Uddin portrait',
    title: 'Md. Jalal Uddin',
    subtitle: 'Site Supervisor',
  },
  {
    src: siteEngineerPhoto,
    alt: 'Lutfar portrait',
    title: 'Lutfar',
    subtitle: 'Site Engineer',
  },
  {
    src: structuralEngineerPhoto,
    alt: 'Md. Mostafa Kamal portrait',
    title: 'Md. Mostafa Kamal',
    subtitle: 'Structural Engineer',
  },
  {
    src: mustaqEngineerProfile,
    alt: 'Mustaq Ahmed Shajib profile page',
    title: 'Mustaq Ahmed Shajib',
    subtitle: 'Asst. Engineer',
  },
  {
    src: labTechnicianPhoto,
    alt: 'Md. Shakil portrait',
    title: 'Md. Shakil',
    subtitle: 'Lab Technician',
  },
  {
    src: surveyorPhoto,
    alt: 'Md. Shohel Rana portrait',
    title: 'Md. Shohel Rana',
    subtitle: 'Surveyor',
  },
  {
    src: secondSiteEngineerPhoto,
    alt: 'Saidur Rahman portrait',
    title: 'Saidur Rahman',
    subtitle: 'Site Engineer',
  },
  {
    src: fieldRigImage,
    alt: 'Onega Group field rig setup',
    title: 'Field Rig Setup',
    subtitle: 'On-site soil investigation',
  },
  {
    src: crewInspectionImage,
    alt: 'Onega Group crew inspection in the field',
    title: 'Crew Inspection',
    subtitle: 'Field supervision and testing',
  },
  {
    src: fieldMobilizationImage,
    alt: 'Onega Group mobilization scene in the field',
    title: 'Site Mobilization',
    subtitle: 'Project execution in the field',
  },
]

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="bg-white px-6 py-20 animate-fade-in sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center animate-fade-in-up animate-stagger-1">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-500">Photo Gallery</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Team and Field Gallery</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            View technical team profiles and field documentation from Onega Group&apos;s company records and project activities.
          </p>
        </div>

        <div className="grid gap-4 animate-fade-in-up animate-stagger-2 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative h-72 cursor-pointer overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">{image.subtitle}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-2xl text-white transition hover:text-amber-400"
            >
              x
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="h-auto w-full rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold text-white">{selectedImage.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-amber-300">{selectedImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ImageGallery
