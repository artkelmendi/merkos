import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/ArrowIcon'
import { BrandWordmark } from '../components/BrandWordmark'
import { DemoNotice } from '../components/DemoNotice'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { VehicleCard } from '../components/VehicleCard'
import { businessContact } from '../data/business'
import { featuredVehicles } from '../data/vehicles'

const heroImages = [
  { src: '/images/facebook/auto-merkos-bmw-side.jpg', alt: 'BMW 320d e fotografuar te AUTO MERKOS' },
  { src: '/images/facebook/auto-merkos-bmw-rear.jpg', alt: 'BMW 320d, pamje nga prapa te AUTO MERKOS' },
  { src: '/images/facebook/auto-merkos-bmw-front.jpg', alt: 'BMW 320d, pamje nga përpara te AUTO MERKOS' },
  { src: '/images/facebook/auto-merkos-bmw-rear-three-quarter.jpg', alt: 'BMW 320d, pamje anësore te AUTO MERKOS' },
]

export function HomePage() {
  const hasDemonstrationFeaturedVehicles = featuredVehicles.some((vehicle) => vehicle.dataStatus === 'demonstration')
  const [heroImageIndex, setHeroImageIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setHeroImageIndex((index) => (index + 1) % heroImages.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <PageMeta
        title="AUTO MERKOS — Vetura të përzgjedhura"
        description="Shikoni veturat e përzgjedhura nga AUTO MERKOS dhe na kontaktoni për informata të detajuara."
        image="/images/facebook/auto-merkos-bmw-side.jpg"
      />

      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero__rail">
          <div className="home-hero__copy">
            <p className="home-hero__eyebrow">AUTO MERKOS / PEJË–DEÇAN</p>
            <h1 id="home-hero-title">Vetura nga Koreja.</h1>
            <Link className="outline-button outline-button--light" to="/vetura">
              Shiko veturat <ArrowIcon />
            </Link>
            <p className="home-hero__frame">KOREA → KOSOVË</p>
          </div>
        </div>

        <div className="home-hero__visual">
          <span className="home-hero__backdrop-word" aria-hidden="true">
            MERKOS
          </span>
          {heroImages.map((image, index) => (
            <SmartImage
              key={image.src}
              wrapperClassName={`home-hero__slide ${index === heroImageIndex ? 'is-active' : ''}`}
              src={image.src}
              alt={image.alt}
              width="1200"
              height="900"
              loading="eager"
              fetchPriority={index === 0 ? 'high' : 'auto'}
              sizes="(max-width: 767px) 100vw, 72vw"
            />
          ))}
          <span className="home-hero__shutter" aria-hidden="true" />
        </div>

        <div className="home-hero__mobile-copy">
          <p className="home-hero__eyebrow">AUTO MERKOS / PEJË–DEÇAN</p>
          <h1>Vetura nga Koreja.</h1>
          <Link className="outline-button outline-button--light" to="/vetura">
            Shiko veturat <ArrowIcon />
          </Link>
        </div>
      </section>

      <section className="brand-story section-paper" aria-labelledby="brand-story-title">
        <div className="section-container">
          <Reveal variant="line" className="brand-story__kicker-row">
            <p>AUTO MERKOS / KOSOVË</p>
            <a href={businessContact.instagram} target="_blank" rel="noreferrer" className="text-link">
              @automerkos <ArrowIcon />
            </a>
          </Reveal>

          <Reveal variant="line" className="brand-story__wordmark" delay={70}>
            <BrandWordmark />
          </Reveal>

          <div className="brand-story__main">
            <Reveal variant="lift">
              <h2 id="brand-story-title">
                <span>Nga Koreja.</span>
                <span>Për rrugët e Kosovës.</span>
              </h2>
            </Reveal>
            <Reveal variant="line" delay={90}>
              <p className="brand-story__copy">
                AUTO MERKOS prezanton vetura nga Koreja dhe ju mirëpret në Magjistralen Pejë–Deçan.
                Për pyetje rreth një modeli, kontaktoni ekipin drejtpërdrejt.
              </p>
              <Link to="/rreth-nesh" className="text-link">
                Njihuni me Auto Merkos <ArrowIcon />
              </Link>
            </Reveal>
          </div>

          <Reveal variant="line" className="brand-route" delay={80}>
            <span>KOREA</span>
            <span className="brand-route__track" aria-hidden="true">
              <i />
            </span>
            <span>KOSOVË</span>
          </Reveal>

          <dl className="brand-story__facts">
            <Reveal variant="lift">
              <dt>Fokusi</dt>
              <dd>{businessContact.bio}</dd>
            </Reveal>
            <Reveal variant="lift" delay={70}>
              <dt>Lokacioni</dt>
              <dd>
                <a href={businessContact.mapUrl} target="_blank" rel="noreferrer">
                  {businessContact.address}
                </a>
              </dd>
            </Reveal>
            <Reveal variant="lift" delay={140}>
              <dt>Kontakti</dt>
              <dd className="brand-story__phones">
                {businessContact.phones.map((phone) => (
                  <a href={`tel:${phone.dial}`} key={phone.dial}>
                    {phone.display}
                  </a>
                ))}
              </dd>
            </Reveal>
          </dl>
        </div>
      </section>

      <section className="featured-section section-dark">
        <div className="section-container">
          <Reveal variant="line" className="section-heading-row">
            <h2>Të sapoardhura</h2>
            <Link to="/vetura" className="text-link text-link--light">
              Shiko të gjitha <ArrowIcon />
            </Link>
          </Reveal>

          {hasDemonstrationFeaturedVehicles && <DemoNotice compact />}

          <div className="featured-grid">
            {featuredVehicles.slice(0, 4).map((vehicle, index) => (
              <Reveal key={vehicle.id} variant={index % 2 === 0 ? 'clip' : 'lift'} delay={(index % 2) * 80}>
                <VehicleCard vehicle={vehicle} priority={index < 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact">
        <SmartImage
          src="/images/showroom-auto-merkos.webp"
          alt="Ilustrim i një hapësire moderne për prezantimin e veturave"
          width="2200"
          height="1467"
          loading="lazy"
          sizes="100vw"
        />
        <div className="home-contact__content">
          <p className="home-contact__eyebrow">PEJË–DEÇAN / KOSOVË</p>
          <h2>Ejani te Auto Merkos.</h2>
          <p>
            Na vizitoni në {businessContact.address}, ose na telefononi për informata rreth veturave në
            dispozicion.
          </p>
          <Link className="outline-button outline-button--light" to="/kontakti">
            Kontakti dhe lokacioni <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  )
}
