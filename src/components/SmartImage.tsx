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
  src,
  onLoad,
  onError,
  ...props
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const resolveAssetPath = (path?: string) => (path?.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path)
  const resolvedSrc = resolveAssetPath(src)
  const resolvedMobileSrc = resolveAssetPath(mobileSrc)

  return (
    <span className={`smart-image ${loaded ? 'is-loaded' : ''} ${failed ? 'is-failed' : ''} ${wrapperClassName}`}>
      {!loaded && !failed && <span className="smart-image__placeholder" aria-hidden="true" />}
      {failed ? (
        <span className="smart-image__error" role="img" aria-label={alt}>
          Fotografia nuk u ngarkua
        </span>
      ) : resolvedMobileSrc ? (
        <picture>
          <source media="(max-width: 600px)" srcSet={resolvedMobileSrc} />
          <img
            {...props}
            src={resolvedSrc}
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
          src={resolvedSrc}
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
