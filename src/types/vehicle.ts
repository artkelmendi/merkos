export type VehicleStatus = 'Në dispozicion' | 'E rezervuar'

export interface Vehicle {
  id: string
  slug: string
  brand: string
  model: string
  variant: string
  year: number | null
  mileage: number | null
  price: number | null
  fuel: 'Benzinë' | 'Naftë' | 'Hibrid' | 'Elektrike' | null
  transmission: 'Automatik' | 'Manual' | null
  engine: string | null
  power: string | null
  drivetrain: string | null
  exteriorColor: string
  interiorColor: string
  featured: boolean
  status: VehicleStatus
  images: string[]
  cardImage: string
  description: string
  features: string[]
  dataStatus: 'demonstration' | 'live'
}
