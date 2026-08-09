import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { BrandIntro } from './BrandIntro'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="site-shell">
      <BrandIntro />
      <a className="skip-link" href="#main-content">
        Kalo te përmbajtja
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
