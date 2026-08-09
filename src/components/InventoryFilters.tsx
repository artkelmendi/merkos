import { useEffect } from 'react'

export interface FilterState {
  brand: string
  year: string
  fuel: string
  price: string
  sort: string
}

interface InventoryFiltersProps {
  filters: FilterState
  brands: string[]
  years: number[]
  open: boolean
  onChange: (next: FilterState) => void
  onClose: () => void
  onReset: () => void
}

const priceOptions = [
  { value: '', label: 'Të gjitha' },
  { value: 'under-75000', label: 'Deri në €75,000' },
  { value: '75000-120000', label: '€75,000 — €120,000' },
  { value: 'over-120000', label: 'Mbi €120,000' },
]

export function InventoryFilters({
  filters,
  brands,
  years,
  open,
  onChange,
  onClose,
  onReset,
}: InventoryFiltersProps) {
  const setFilter = (key: keyof FilterState, value: string) => {
    onChange({ ...filters, [key]: value })
  }

  useEffect(() => {
    document.body.classList.toggle('filter-is-open', open)
    if (!open) return () => document.body.classList.remove('filter-is-open')
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('filter-is-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose, open])

  const controls = (
    <>
      <label>
        <span>Marka</span>
        <select value={filters.brand} onChange={(event) => setFilter('brand', event.target.value)}>
          <option value="">Të gjitha</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Viti</span>
        <select value={filters.year} onChange={(event) => setFilter('year', event.target.value)}>
          <option value="">Të gjitha</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Çmimi</span>
        <select value={filters.price} onChange={(event) => setFilter('price', event.target.value)}>
          {priceOptions.map((option) => (
            <option key={option.value || 'all'} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Karburanti</span>
        <select value={filters.fuel} onChange={(event) => setFilter('fuel', event.target.value)}>
          <option value="">Të gjitha</option>
          <option value="Benzinë">Benzinë</option>
          <option value="Naftë">Naftë</option>
          <option value="Hibrid">Hibrid</option>
          <option value="Elektrike">Elektrike</option>
        </select>
      </label>
    </>
  )

  return (
    <>
      <div className="filter-bar" aria-label="Filtrat e veturave">
        {controls}
        <label className="filter-bar__sort">
          <span>Renditja</span>
          <select value={filters.sort} onChange={(event) => setFilter('sort', event.target.value)}>
            <option value="newest">Më të rejat</option>
            <option value="price-asc">Çmimi: nga më i ulëti</option>
            <option value="price-desc">Çmimi: nga më i larti</option>
          </select>
        </label>
      </div>

      <div className={`filter-sheet ${open ? 'is-open' : ''}`} aria-hidden={!open} inert={!open}>
        <button className="filter-sheet__backdrop" type="button" onClick={onClose} tabIndex={open ? 0 : -1}>
          <span className="sr-only">Mbyll filtrat</span>
        </button>
        <aside role="dialog" aria-modal="true" aria-labelledby="filter-title">
          <div className="filter-sheet__header">
            <h2 id="filter-title">Filtro</h2>
            <button type="button" onClick={onClose} aria-label="Mbyll filtrat">
              <span />
              <span />
            </button>
          </div>
          <div className="filter-sheet__controls">
            {controls}
            <label>
              <span>Renditja</span>
              <select value={filters.sort} onChange={(event) => setFilter('sort', event.target.value)}>
                <option value="newest">Më të rejat</option>
                <option value="price-asc">Çmimi: nga më i ulëti</option>
                <option value="price-desc">Çmimi: nga më i larti</option>
              </select>
            </label>
          </div>
          <div className="filter-sheet__actions">
            <button type="button" className="text-button" onClick={onReset}>
              Pastro filtrat
            </button>
            <button type="button" className="solid-button" onClick={onClose}>
              Shiko rezultatet
            </button>
          </div>
        </aside>
      </div>
    </>
  )
}
