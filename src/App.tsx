import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { InventoryPage } from './pages/InventoryPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { VehicleDetailPage } from './pages/VehicleDetailPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="vetura" element={<InventoryPage />} />
        <Route path="vetura/:slug" element={<VehicleDetailPage />} />
        <Route path="rreth-nesh" element={<AboutPage />} />
        <Route path="kontakti" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
