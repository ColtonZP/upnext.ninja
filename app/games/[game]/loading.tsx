export default function Loading() {
  return (
    <main>
      <div className="grid">
        {Array.from(Array(36).keys()).map(() => (
          <div className="skeleton" style={{ height: '350px' }} />
        ))}
      </div>
    </main>
  )
}
