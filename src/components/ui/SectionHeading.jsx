export default function SectionHeading({ eyebrow, children, className = '' }) {
  return (
    <div className={className}>
      {eyebrow && <p className="font-serif text-2xl text-sand md:text-3xl">{eyebrow}</p>}
      <h2 className="mt-2 font-serif text-4xl leading-tight md:text-6xl">{children}</h2>
    </div>
  )
}