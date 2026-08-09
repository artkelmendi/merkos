import { Link } from 'react-router-dom'
import { businessContact } from '../data/business'
import { ArrowIcon } from './ArrowIcon'
import { BrandWordmark } from './BrandWordmark'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Link to="/" className="site-footer__brand" aria-label="AUTO MERKOS — Ballina">
          <BrandWordmark />
        </Link>
        <Link to="/vetura" className="site-footer__lead-link">
          Shiko veturat <ArrowIcon />
        </Link>
      </div>

      <div className="site-footer__grid">
        <nav aria-label="Navigimi në fund të faqes">
          <Link to="/vetura">Vetura</Link>
          <Link to="/rreth-nesh">Rreth nesh</Link>
          <Link to="/kontakti">Kontakti</Link>
        </nav>

        <div className="site-footer__contact">
          {businessContact.phones.map((phone) => (
            <a href={`tel:${phone.dial}`} key={phone.dial}>
              {phone.display}
            </a>
          ))}
          <a href={businessContact.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={businessContact.mapUrl} target="_blank" rel="noreferrer">
            {businessContact.address}
          </a>
        </div>

        <p>© {new Date().getFullYear()} AUTO MERKOS</p>
      </div>
    </footer>
  )
}
