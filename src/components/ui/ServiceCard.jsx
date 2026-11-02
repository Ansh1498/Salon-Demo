export default function ServiceCard({ name, description, price }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-3xl bg-surface p-8 transition duration-300 hover:-translate-y-1">
      <h2 className="font-serif text-3xl">{name}</h2>
      <p className="font-light leading-relaxed text-cream/85">{description}</p>
      <p className="mt-auto border-t border-cream/15 pt-4 text-sand">From {price}</p>
    </div>
  )
}