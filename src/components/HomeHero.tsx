import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon } from './ArrowIcon'
import { SmartImage } from './SmartImage'

const heroImage = '/images/hero-bmw-g30-v2.webp'

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
      <div className="merkos-hero__atmosphere" aria-hidden="true">
        <span className="merkos-hero__light" />
        <span className="merkos-hero__floor" />
      </div>

      <div className="merkos-hero__wordmark" aria-hidden="true">
        <span>MERKOS</span>
      </div>

      <div className="merkos-hero__car">
        <SmartImage
          wrapperClassName="merkos-hero__car-image"
          src={heroImage}
          alt="BMW 5 Series G30 në ngjyrë grafit"
          width="1536"
          height="1024"
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 900px) 125vw, 72vw"
        />
      </div>

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
            Vetura të përzgjedhura nga Koreja, për rrugët e Kosovës. Gjeni modelin tuaj te AUTO MERKOS.
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

        <dl className="merkos-hero__facts">
          <div>
            <dt>Origjina</dt>
            <dd>Koreja</dd>
          </div>
          <div>
            <dt>Lokacioni</dt>
            <dd>Pejë–Deçan</dd>
          </div>
          <div>
            <dt>Modeli</dt>
            <dd>BMW G30</dd>
          </div>
        </dl>
      </div>

      <p className="merkos-hero__edition" aria-hidden="true">
        AUTO MERKOS / 2026
      </p>
    </section>
  )
}
