import { useEffect, useRef, useState } from 'react'
import { ArrowIcon } from './ArrowIcon'
import { SmartImage } from './SmartImage'

interface VehicleGalleryProps {
  images: string[]
  vehicleName: string
}

export function VehicleGallery({ images, vehicleName }: VehicleGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const safeImages = images.length > 0 ? images : ['/images/vehicles/vehicle-01.webp']

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + safeImages.length) % safeImages.length)
  }

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % safeImages.length)
  }

  useEffect(() => {
    if (!lightboxOpen) return
    document.body.classList.add('lightbox-is-open')
    closeButtonRef.current?.focus()

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxOpen(false)
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.classList.remove('lightbox-is-open')
      window.removeEventListener('keydown', handleKey)
    }
  }, [lightboxOpen, safeImages.length])

  return (
    <section className="vehicle-gallery" aria-label={`Galeria e ${vehicleName}`}>
      <button className="vehicle-gallery__main" type="button" onClick={() => setLightboxOpen(true)}>
        <SmartImage
          src={safeImages[activeIndex]}
          alt={`${vehicleName}, fotografia ${activeIndex + 1} nga ${safeImages.length}`}
          width="1800"
          height="1200"
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
        />
        <span className="vehicle-gallery__count">
          {String(activeIndex + 1).padStart(2, '0')} / {String(safeImages.length).padStart(2, '0')}
        </span>
        <span className="vehicle-gallery__expand">Hap galerinë</span>
      </button>

      {safeImages.length > 1 && (
        <div className="vehicle-gallery__rail" role="tablist" aria-label="Fotografitë">
          {safeImages.map((image, index) => (
            <button
              key={image}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Shfaq fotografinë ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            >
              <SmartImage
                src={image}
                alt=""
                width="360"
                height="240"
                loading={index < 3 ? 'eager' : 'lazy'}
              />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Galeria e ${vehicleName}`}>
          <button
            ref={closeButtonRef}
            className="lightbox__close"
            type="button"
            onClick={() => setLightboxOpen(false)}
          >
            Mbyll
          </button>
          <SmartImage
            src={safeImages[activeIndex]}
            alt={`${vehicleName}, fotografia ${activeIndex + 1}`}
            width="2000"
            height="1333"
          />
          {safeImages.length > 1 && (
            <div className="lightbox__controls">
              <button type="button" onClick={showPrevious} aria-label="Fotografia e mëparshme">
                <ArrowIcon direction="left" />
              </button>
              <span>
                {String(activeIndex + 1).padStart(2, '0')} / {String(safeImages.length).padStart(2, '0')}
              </span>
              <button type="button" onClick={showNext} aria-label="Fotografia e ardhshme">
                <ArrowIcon />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
