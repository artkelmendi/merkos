interface ArrowIconProps {
  direction?: 'left' | 'right' | 'up-right'
}

export function ArrowIcon({ direction = 'right' }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={`arrow-icon arrow-icon--${direction}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M4 12h15" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  )
}
