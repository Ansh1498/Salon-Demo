export default function Logo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 56 76"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 2V74" />
      <path d="M16 22C-2 22 -2 62 16 62" />
      <circle cx="34" cy="42" r="19" />
      <path d="M15 42H53" />
    </svg>
  )
}