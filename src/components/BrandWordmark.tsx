import type { CSSProperties } from 'react'

const wordmark = 'AUTO MERKOS'

interface BrandWordmarkProps {
  animated?: boolean
  className?: string
}

export function BrandWordmark({ animated = false, className = '' }: BrandWordmarkProps) {
  return (
    <span
      className={`brand-wordmark ${animated ? 'brand-wordmark--animated' : ''} ${className}`.trim()}
      aria-hidden="true"
    >
      {wordmark.split('').map((character, index) =>
        character === ' ' ? (
          <span className="brand-wordmark__space" key={`space-${index}`} />
        ) : (
          <span
            className="brand-wordmark__letter"
            key={`${character}-${index}`}
            style={{ '--letter-index': index } as CSSProperties}
          >
            {character}
          </span>
        ),
      )}
    </span>
  )
}
