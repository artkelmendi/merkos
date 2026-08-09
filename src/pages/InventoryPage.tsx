import { useMemo, useState } from 'react'
import { DemoNotice } from '../components/DemoNotice'
import { InventoryFilters, type FilterState } from '../components/InventoryFilters'
import { PageMeta } from '../components/PageMeta'
import { VehicleCard } from '../components/VehicleCard'
import { vehicles } from '../data/vehicles'

const initialFilters: FilterState = {
  brand: '',
  year: '',
  fuel: '',
  price: '',
  sort: 'newest',
}

export function InventoryPage() {
  const [filters, setFilters] = useState<FilterState>(initialFilters)
  const [filterOpen, setFilterOpen] = useState(false)
  const hasDemonstrationVehicles = vehicles.some((vehicle) => vehicle.dataStatus === 'demonstration')

  const brands = useMemo(() => [...new Set(vehicles.map((vehicle) => vehicle.brand))].sort(), [])
  const years = useMemo(() => [...new Set(vehicles.flatMap((vehicle) => (vehicle.year ? [vehicle.year] : [])))].sort((a, b) => b - a), [])

  const filteredVehicles = useMemo(() => {
    const result = vehicles.filter((vehicle) => {
      const brandMatch = !filters.brand || vehicle.brand === filters.brand
      const yearMatch = !filters.year || vehicle.year === Number(filters.year)
      const fuelMatch = !filters.fuel || vehicle.fuel === filters.fuel
      const priceMatch =
        !filters.price ||
        (filters.price === 'under-75000' && vehicle.price !== null && vehicle.price < 75000) ||
        (filters.price === '75000-120000' && vehicle.price !== null && vehicle.price >= 75000 && vehicle.price <= 120000) ||
        (filters.price === 'over-120000' && vehicle.price !== null && vehicle.price > 120000)

      return brandMatch && yearMatch && fuelMatch && priceMatch
    })

    return result.sort((a, b) => {
      if (filters.sort === 'price-asc') return (a.price ?? Number.MAX_SAFE_INTEGER) - (b.price ?? Number.MAX_SAFE_INTEGER)
      if (filters.sort === 'price-desc') return (b.price ?? -1) - (a.price ?? -1)
      return (b.year ?? 0) - (a.year ?? 0) || (a.mileage ?? Number.MAX_SAFE_INTEGER) - (b.mileage ?? Number.MAX_SAFE_INTEGER)
    })
  }, [filters])

  const activeFilterCount = [filters.brand, filters.year, filters.fuel, filters.price].filter(Boolean).length

  return (
    <>
      <PageMeta
        title="Vetura në shitje — AUTO MERKOS"
        description="Shikoni veturat në shitje te AUTO MERKOS. Filtroni sipas markës, vitit, çmimit dhe karburantit."
      />

      <header className="page-intro page-intro--inventory">
        <div className="section-container">
          <h1>Vetura në shitje</h1>
          {hasDemonstrationVehicles && <DemoNotice />}
        </div>
      </header>

      <section className="inventory-section section-paper">
        <div className="section-container">
          <div className="inventory-mobile-tools">
            <button type="button" className="filter-trigger" onClick={() => setFilterOpen(true)}>
              Filtro {activeFilterCount > 0 && <span>{activeFilterCount}</span>}
            </button>
            <label>
              <span className="sr-only">Renditja</span>
              <select value={filters.sort} onChange={(event) => setFilters({ ...filters, sort: event.target.value })}>
                <option value="newest">Më të rejat</option>
                <option value="price-asc">Çmimi: nga më i ulëti</option>
                <option value="price-desc">Çmimi: nga më i larti</option>
              </select>
            </label>
          </div>

          <InventoryFilters
            filters={filters}
            brands={brands}
            years={years}
            open={filterOpen}
            onChange={setFilters}
            onClose={() => setFilterOpen(false)}
            onReset={() => setFilters(initialFilters)}
          />

          <div className="inventory-results-row">
            <p>{filteredVehicles.length} vetura</p>
            {activeFilterCount > 0 && (
              <button type="button" className="text-button" onClick={() => setFilters(initialFilters)}>
                Pastro filtrat
              </button>
            )}
          </div>

          {filteredVehicles.length > 0 ? (
            <div className="inventory-grid">
              {filteredVehicles.map((vehicle, index) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} priority={index < 3} />
              ))}
            </div>
          ) : (
            <div className="inventory-empty">
              <h2>Nuk u gjet asnjë veturë.</h2>
              <p>Ndryshoni filtrat dhe provoni përsëri.</p>
              <button type="button" className="outline-button" onClick={() => setFilters(initialFilters)}>
                Pastro filtrat
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
