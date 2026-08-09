import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/ArrowIcon'
import { PageMeta } from '../components/PageMeta'

export function NotFoundPage() {
  return (
    <section className="not-found">
      <PageMeta title="Faqja nuk u gjet — AUTO MERKOS" description="Faqja e kërkuar nuk u gjet." />
      <div>
        <p>404</p>
        <h1>Faqja nuk u gjet.</h1>
        <Link className="outline-button outline-button--light" to="/">
          Kthehu në ballinë <ArrowIcon />
        </Link>
      </div>
    </section>
  )
}
