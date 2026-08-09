import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { BrandWordmark } from './BrandWordmark'

const links = [
  { to: '/vetura', label: 'Vetura' },
  { to: '/rreth-nesh', label: 'Rreth nesh' },
  { to: '/kontakti', label: 'Kontakti' },
]

export function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen)
    return () => document.body.classList.remove('menu-is-open')
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className={`site-header ${isHome ? 'site-header--overlay' : 'site-header--solid'}`}>
      <div className="site-header__inner">
        <NavLink to="/" className="wordmark" aria-label="AUTO MERKOS — Ballina">
          <BrandWordmark />
        </NavLink>

        <nav className="desktop-nav" aria-label="Navigimi kryesor">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'is-active' : '')}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="menu-trigger"
          type="button"
          aria-label={menuOpen ? 'Mbyll menynë' : 'Hap menynë'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Navigimi mobil">
          {links.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              tabIndex={menuOpen ? 0 : -1}
              style={{ '--menu-index': index } as React.CSSProperties}
            >
              <span>0{index + 1}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <p>AUTO MERKOS · PEJË–DEÇAN · KOSOVË</p>
      </div>
    </header>
  )
}
