import { useSearchParams } from 'react-router-dom'
import { BrandWordmark } from '../components/BrandWordmark'
import { PageMeta } from '../components/PageMeta'
import { SmartImage } from '../components/SmartImage'
import { businessContact } from '../data/business'
import { getVehicleBySlug } from '../data/vehicles'

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const vehicle = getVehicleBySlug(searchParams.get('vetura') ?? '')

  const rows = [
    { label: 'Lokacioni', value: businessContact.address, href: businessContact.mapUrl, external: true },
    ...businessContact.phones.map((phone, index) => ({
      label: `Telefoni 0${index + 1}`,
      value: phone.display,
      href: `tel:${phone.dial}`,
      external: false,
    })),
    { label: 'Instagram', value: '@automerkos', href: businessContact.instagram, external: true },
  ]

  return (
    <>
      <PageMeta
        title="Kontakti — AUTO MERKOS"
        description="Kontaktoni AUTO MERKOS ose na vizitoni në Magjistralen Pejë–Deçan."
      />

      <header className="page-intro page-intro--contact">
        <div className="section-container">
          <h1>Kontakti</h1>
          {vehicle && (
            <p>
              Kërkesë për {vehicle.brand} {vehicle.model} {vehicle.variant}
            </p>
          )}
        </div>
      </header>

      <section className="contact-section section-paper">
        <div className="section-container contact-section__grid">
          <div>
            <h2>
              <span className="sr-only">AUTO MERKOS</span>
              <BrandWordmark />
            </h2>
            <p className="contact-section__note">
              Na telefononi drejtpërdrejt, na shkruani në Instagram, ose na vizitoni në Magjistralen
              Pejë–Deçan.
            </p>
            <dl>
              {rows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>
                    <a
                      href={row.href}
                      target={row.external ? '_blank' : undefined}
                      rel={row.external ? 'noreferrer' : undefined}
                    >
                      {row.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <SmartImage
            src="/images/showroom-auto-merkos.webp"
            alt="Ilustrim i një hapësire moderne për prezantimin e veturave"
            width="1600"
            height="1067"
            loading="lazy"
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
      </section>
    </>
  )
}
