import { siteInfo } from '../../data/siteInfo'

export default function ContactInfo() {
  const items = [
    { label: 'Phone', value: siteInfo.phone, href: `tel:${siteInfo.phone.replace(/\s/g, '')}` },
    { label: 'Address', value: siteInfo.address },
    { label: 'Hours', value: siteInfo.hours },
  ]

  return (
    <div>
      <p className="font-serif text-2xl text-sand md:text-3xl">Contact</p>
      <h1 className="mt-2 mb-10 font-serif text-5xl leading-none md:text-7xl">
        Let’s book <span className="text-tan">your visit</span>
      </h1>

      <dl className="mb-10 grid gap-6">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="text-sm tracking-widest text-sand uppercase">{item.label}</dt>
            <dd className="mt-1 font-serif text-3xl">
              {item.href ? (
                <a href={item.href} className="transition-colors hover:text-sand">
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      {/* Map placeholder. Baad me yahan Google Maps ka <iframe> laga sakte ho */}
      <div
        role="img"
        aria-label="Map placeholder"
        className="flex h-60 items-center justify-center rounded-3xl bg-linear-to-b from-[#6A5E52] to-surface text-sm tracking-widest"
      >
        [MAP]
      </div>
    </div>
  )
}