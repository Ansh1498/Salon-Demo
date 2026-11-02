import FadeIn from '../../components/animations/FadeIn'
import { highlights } from '../../data/highlights'

export default function Highlights() {
  return (
    <section className="grid gap-10 px-6 py-16 md:grid-cols-3 md:px-12 md:py-20">
      {highlights.map((item, i) => (
        <FadeIn key={item.title} delay={i * 0.12}>
          <h2 className="mb-2 font-serif text-3xl">{item.title}</h2>
          <p className="font-light leading-relaxed text-cream/80">{item.text}</p>
        </FadeIn>
      ))}
    </section>
  )
}