export default function ArchImage({ src, alt = '', label = '[PHOTO]', className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-t-full bg-linear-to-b from-[#756860] to-brown ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-sm tracking-widest text-cream">
          {label}
        </span>
      )}
    </div>
  )
}