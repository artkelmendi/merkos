import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/ArrowIcon'
import { BrandWordmark } from '../components/BrandWordmark'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { businessContact } from '../data/business'

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="Rreth nesh — AUTO MERKOS"
        description="AUTO MERKOS prezanton vetura nga Koreja në Magjistralen Pejë–Deçan, Kosovë."
      />

      <header className="page-intro page-intro--about">
        <div className="section-container">
          <p className="page-intro__eyebrow">AUTO MERKOS / KOSOVË</p>
          <h1>Rreth nesh</h1>
          <p className="page-intro__lead">Nga Koreja. Për rrugët e Kosovës.</p>
        </div>
      </header>

      <section className="about-visual">
        <SmartImage
          src="/images/showroom-architecture.webp"
          alt="Hapësirë moderne për ekspozimin e veturave"
          width="2200"
          height="1300"
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
        />
      </section>

      <section className="about-copy section-paper">
        <div className="section-container about-copy__grid">
          <Reveal variant="lift">
            <h2 className="about-copy__wordmark">
              <span className="sr-only">AUTO MERKOS</span>
              <BrandWordmark />
            </h2>
          </Reveal>
          <Reveal variant="line" delay={80}>
            <p>
              Profili zyrtar i AUTO MERKOS e përmbledh fokusin qartë: “Vetura nga KOREA”. Ne ju
              mirëpresim në Magjistralen Pejë–Deçan dhe ju lidhim drejtpërdrejt me ekipin për çdo
              pyetje rreth veturave në dispozicion.
            </p>
            <div className="about-copy__actions">
              <Link className="outline-button" to="/kontakti">
                Na kontakto <ArrowIcon />
              </Link>
              <a className="text-link" href={businessContact.instagram} target="_blank" rel="noreferrer">
                Instagram <ArrowIcon />
              </a>
            </div>
          </Reveal>
        </div>

        <dl className="section-container about-facts">
          <Reveal variant="lift">
            <dt>Prej nga vijnë veturat?</dt>
            <dd>Korea</dd>
          </Reveal>
          <Reveal variant="lift" delay={70}>
            <dt>Ku na gjeni?</dt>
            <dd>
              <a href={businessContact.mapUrl} target="_blank" rel="noreferrer">
                {businessContact.address}
              </a>
            </dd>
          </Reveal>
          <Reveal variant="lift" delay={140}>
            <dt>Si na kontaktoni?</dt>
            <dd>
              <a href={`tel:${businessContact.phones[0].dial}`}>{businessContact.phones[0].display}</a>
            </dd>
          </Reveal>
        </dl>
      </section>
    </>
  )
}
