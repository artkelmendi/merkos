import { Link, useParams } from 'react-router-dom'
import { ArrowIcon } from '../components/ArrowIcon'
import { DemoNotice } from '../components/DemoNotice'
import { PageMeta } from '../components/PageMeta'
import { VehicleCard } from '../components/VehicleCard'
import { VehicleGallery } from '../components/VehicleGallery'
import { getVehicleBySlug, vehicles } from '../data/vehicles'
import { formatMileage, formatPrice } from '../lib/format'
import { NotFoundPage } from './NotFoundPage'

export function VehicleDetailPage() {
  const { slug = '' } = useParams()
  const vehicle = getVehicleBySlug(slug)

  if (!vehicle) return <NotFoundPage />

  const name = `${vehicle.brand} ${vehicle.model} ${vehicle.variant}`
  const related = vehicles.filter((item) => item.id !== vehicle.id).slice(0, 3)
  const specifications = [
    ['Viti', vehicle.year],
    ['Kilometrazha', vehicle.mileage === null ? null : formatMileage(vehicle.mileage)],
    ['Motori', vehicle.engine],
    ['Karburanti', vehicle.fuel],
    ['Transmisioni', vehicle.transmission],
    ['Fuqia', vehicle.power],
    ['Tërheqja', vehicle.drivetrain],
    ['Ngjyra', vehicle.exteriorColor],
  ]

  return (
    <>
      <PageMeta
        title={`${name} — AUTO MERKOS`}
        description={vehicle.year ? `${vehicle.year} · ${formatMileage(vehicle.mileage ?? 0)}. Shikoni detajet për ${name}.` : `Shikoni fotografitë dhe detajet për ${name}.`}
        image={vehicle.images[0] ?? vehicle.cardImage}
      />

      <div className="detail-page">
        <VehicleGallery images={vehicle.images} vehicleName={name} />

        <section className="vehicle-summary section-paper">
          <div className="section-container vehicle-summary__grid">
            <div>
              <h1>
                {vehicle.brand} {vehicle.model} <span>{vehicle.variant}</span>
              </h1>
              <p className="vehicle-summary__quick">
                {vehicle.year ? `${vehicle.year} · ${formatMileage(vehicle.mileage ?? 0)}` : 'Kontakto për detaje'}
              </p>
            </div>
            <div className="vehicle-summary__action">
              <p className="vehicle-summary__status">{vehicle.status}</p>
              <p className="vehicle-summary__price">{vehicle.price === null ? 'Kontakto për çmim' : formatPrice(vehicle.price)}</p>
              <Link className="solid-button" to={`/kontakti?vetura=${vehicle.slug}`}>
                Kontakto për këtë veturë <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="section-container">
            {vehicle.dataStatus === 'demonstration' && <DemoNotice compact />}
          </div>
        </section>

        <section className="specifications section-paper">
          <div className="section-container specifications__layout">
            <h2>Informata</h2>
            <dl>
              {specifications.filter(([, value]) => value !== null).map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="vehicle-description section-dark">
          <div className="section-container vehicle-description__grid">
            <div>
              <h2>{name}</h2>
              <p>{vehicle.description}</p>
            </div>
            {vehicle.features.length > 0 && (
              <ul>
                {vehicle.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="vehicle-contact-band section-paper">
          <div className="section-container">
            <h2>Informata për këtë veturë.</h2>
            <Link className="outline-button" to={`/kontakti?vetura=${vehicle.slug}`}>
              Kontakto <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className="related-section section-dark">
          <div className="section-container">
            <div className="section-heading-row">
              <h2>Vetura të tjera</h2>
              <Link className="text-link text-link--light" to="/vetura">
                Shiko të gjitha <ArrowIcon />
              </Link>
            </div>
            <div className="related-grid">
              {related.map((item) => (
                <VehicleCard key={item.id} vehicle={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
