import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon } from './ArrowIcon'

const heroDesktopImage = `${import.meta.env.BASE_URL}images/hero-bmw-g30-editorial-desktop.webp`
const heroMobileImage = `${import.meta.env.BASE_URL}images/hero-bmw-g30-editorial-mobile.webp`

function HeroPicture({ foreground = false }: { foreground?: boolean }) {
  return (
    <picture className={foreground ? 'merkos-hero__car' : 'merkos-hero__scene'} aria-hidden={foreground || undefined}>
      <source media="(max-width: 900px)" srcSet={heroMobileImage} />
      <img
        src={heroDesktopImage}
        alt={foreground ? '' : 'BMW 5 Series G30 M Sport në një rrugë me peizazh dramatik'}
        width="2400"
        height="1350"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
    </picture>
  )
}

export function HomeHero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const reveal = () => setReady(true)

    if (!document.documentElement.classList.contains('intro-is-active')) {
      const frame = window.requestAnimationFrame(reveal)
      return () => window.cancelAnimationFrame(frame)
    }

    window.addEventListener('automerkos:intro-complete', reveal, { once: true })
    return () => window.removeEventListener('automerkos:intro-complete', reveal)
  }, [])

  return (
    <section className={`merkos-hero ${ready ? 'is-ready' : ''}`} aria-labelledby="home-hero-title">
      <HeroPicture />
      <div className="merkos-hero__grade" aria-hidden="true" />

      <div className="merkos-hero__wordmark" aria-hidden="true">
        <span>MERKOS</span>
      </div>

      <HeroPicture foreground />

      <div className="merkos-hero__content section-container">
        <div className="merkos-hero__copy">
          <p className="merkos-hero__model">
            <span>BMW 5 SERIES</span>
            <strong>G30</strong>
          </p>
          <h1 id="home-hero-title">
            <span>Elegancë</span>
            <span>që lëviz.</span>
          </h1>
          <p className="merkos-hero__lede">
            Vetura të përzgjedhura nga Koreja, për rrugët e Kosovës.
          </p>
          <div className="merkos-hero__actions">
            <Link className="merkos-hero__primary" to="/vetura">
              Shiko veturat <ArrowIcon />
            </Link>
            <Link className="merkos-hero__secondary" to="/kontakti">
              Na kontakto
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
