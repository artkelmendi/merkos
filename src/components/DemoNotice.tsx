export function DemoNotice({ compact = false }: { compact?: boolean }) {
  return (
    <p className={`demo-notice ${compact ? 'demo-notice--compact' : ''}`}>
      Inventar demonstrues — të dhënat dhe fotografitë zëvendësohen para publikimit.
    </p>
  )
}
