import { useEffect } from 'react'

interface PageMetaProps {
  title: string
  description: string
  image?: string
}

const ensureMeta = (selector: string, attribute: 'name' | 'property', value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  return element
}

export function PageMeta({ title, description, image }: PageMetaProps) {
  useEffect(() => {
    document.title = title

    ensureMeta('meta[name="description"]', 'name', 'description').content = description
    ensureMeta('meta[property="og:title"]', 'property', 'og:title').content = title
    ensureMeta('meta[property="og:description"]', 'property', 'og:description').content = description
    ensureMeta('meta[property="og:type"]', 'property', 'og:type').content = 'website'

    if (image) {
      ensureMeta('meta[property="og:image"]', 'property', 'og:image').content = new URL(
        image,
        window.location.origin,
      ).toString()
    } else {
      document.head.querySelector<HTMLMetaElement>('meta[property="og:image"]')?.remove()
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = new URL(window.location.pathname, window.location.origin).toString()
  }, [description, image, title])

  return null
}
