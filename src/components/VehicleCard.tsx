import { Link } from 'react-router-dom'
import type { Vehicle } from '../types/vehicle'
import { formatMileage, formatPrice } from '../lib/format'
import { ArrowIcon } from './ArrowIcon'
import { SmartImage } from './SmartImage'

interface VehicleCardProps {
  vehicle: Vehicle
  priority?: boolean
}

export function VehicleCard({ vehicle, priority = false }: VehicleCardProps) {
  const name = `${vehicle.brand} ${vehicle.model} ${vehicle.variant}`

  return (
    <article className="vehicle-card">
      <Link to={`/vetura/${vehicle.slug}`} aria-label={`Shiko detajet për ${name}`}>
        <SmartImage
          src={vehicle.cardImage}
          alt={`${name}, ${vehicle.exteriorColor.toLocaleLowerCase('sq')}`}
          width="1200"
          height="800"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
          wrapperClassName="vehicle-card__media"
        />
        <div className="vehicle-card__body">
          <div>
            <h3>
              {vehicle.brand} {vehicle.model} <span>{vehicle.variant}</span>
            </h3>
          </div>
          <ArrowIcon />
        </div>
        <div className="vehicle-card__meta">
          <p>
            {vehicle.year ? `${vehicle.year} · ${formatMileage(vehicle.mileage ?? 0)}` : 'Kontakto për detaje'}
          </p>
          <p className="vehicle-card__price">{vehicle.price === null ? 'Kontakto për çmim' : formatPrice(vehicle.price)}</p>
        </div>
      </Link>
    </article>
  )
}
