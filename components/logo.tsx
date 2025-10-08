export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-primary blur-xl opacity-50 animate-pulse-glow" />
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative"
        >
          <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <path d="M16 10L22 14V22L16 26L10 22V14L16 10Z" fill="currentColor" className="text-primary" />
          <circle cx="16" cy="18" r="3" fill="currentColor" className="text-secondary" />
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight">
        Exyra <span className="text-primary">Labs</span>
      </span>
    </div>
  )
}
