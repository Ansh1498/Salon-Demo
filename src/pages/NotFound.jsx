import Button from '../components/ui/Button'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="px-6 py-24 md:px-12">
      <p className="font-serif text-2xl text-sand">404</p>
      <h1 className="mt-2 mb-8 font-serif text-5xl md:text-7xl">
        Page <span className="text-tan">not found</span>
      </h1>
      <Button to="/">Back to home</Button>
    </section>
  )
}