import { useState, type ImgHTMLAttributes } from 'react'

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string
  mobileSrc?: string
}

export function SmartImage({
  wrapperClassName = '',
  mobileSrc,
  className = '',
  alt,
  onLoad,
  onError,
  ...props
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <span className={`smart-image ${loaded ? 'is-loaded' : ''} ${failed ? 'is-failed' : ''} ${wrapperClassName}`}>
      {!loaded && !failed && <span className="smart-image__placeholder" aria-hidden="true" />}
      {failed ? (
        <span className="smart-image__error" role="img" aria-label={alt}>
          Fotografia nuk u ngarkua
        </span>
      ) : mobileSrc ? (
        <picture>
          <source media="(max-width: 600px)" srcSet={mobileSrc} />
          <img
            {...props}
            alt={alt}
            className={className}
            onLoad={(event) => {
              setLoaded(true)
              onLoad?.(event)
            }}
            onError={(event) => {
              setFailed(true)
              onError?.(event)
            }}
          />
        </picture>
      ) : (
        <img
          {...props}
          alt={alt}
          className={className}
          onLoad={(event) => {
            setLoaded(true)
            onLoad?.(event)
          }}
          onError={(event) => {
            setFailed(true)
            onError?.(event)
          }}
        />
      )}
    </span>
  )
}
