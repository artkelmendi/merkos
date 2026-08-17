import { useLayoutEffect, useRef, useState } from 'react'
import { BrandWordmark } from './BrandWordmark'

export function BrandIntro() {
  const [visible, setVisible] = useState(true)
  const finished = useRef(false)
  const timer = useRef<number | undefined>(undefined)

  const dismiss = () => {
    if (finished.current) return

    finished.current = true
    window.clearTimeout(timer.current)
    document.documentElement.classList.remove('intro-is-active')
    document.body.classList.remove('intro-is-active')
    window.dispatchEvent(new CustomEvent('automerkos:intro-complete'))
    setVisible(false)
  }

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = reducedMotion ? 180 : 2500

    document.documentElement.classList.add('intro-is-active')
    document.body.classList.add('intro-is-active')

    timer.current = window.setTimeout(dismiss, duration)

    return () => {
      window.clearTimeout(timer.current)
      document.documentElement.classList.remove('intro-is-active')
      document.body.classList.remove('intro-is-active')
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="brand-intro"
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.animationName === 'brand-intro-exit') dismiss()
      }}
    >
      <div className="brand-intro__inner">
        <div className="brand-intro__mark">
          <BrandWordmark animated />
        </div>
        <div className="brand-intro__rule" />
        <div className="brand-intro__meta">
          <span>Vetura nga Korea</span>
          <span>Pejë–Deçan / Kosovë</span>
        </div>
      </div>
    </div>
  )
}
