export const formatPrice = (price: number) =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price)

export const formatMileage = (mileage: number) =>
  `${new Intl.NumberFormat('de-DE').format(mileage)} km`
