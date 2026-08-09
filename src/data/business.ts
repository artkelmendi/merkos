export interface BusinessContact {
  address: string
  mapUrl: string
  phones: Array<{
    display: string
    dial: string
  }>
  email: string | null
  instagram: string
  facebook: string | null
  bio: string
}

export const businessContact: BusinessContact = {
  address: 'Magjistralja Pejë–Deçan',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=AUTO%20MERKOS%20Magjistralja%20Peje%20Decan',
  phones: [
    { display: '+383 48 125 057', dial: '+38348125057' },
    { display: '+383 44 125 107', dial: '+38344125107' },
  ],
  email: null,
  instagram: 'https://www.instagram.com/automerkos/',
  facebook: null,
  bio: 'Vetura nga KOREA',
}
