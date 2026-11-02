import FadeIn from '../../components/animations/FadeIn'
import { values } from '../../data/values'

export default function Values() {
  return (
    <section className="grid gap-10 px-6 py-20 md:grid-cols-3 md:px-12 md:py-24">
      {values.map((item, i) => (
        <FadeIn key={item.title} delay={i * 0.12}>
          <h2 className="mb-2 font-serif text-3xl">{item.title}</h2>
          <p className="font-light leading-relaxed text-cream/80">{item.text}</p>
        </FadeIn>
      ))}
    </section>
  )
}