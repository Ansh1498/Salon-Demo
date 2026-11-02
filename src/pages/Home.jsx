import Hero from '../sections/home/Hero'
import Highlights from '../sections/home/Highlights'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
    usePageTitle('Home')
  return (
    <>
      <Hero />
      <Highlights />
    </>
  )
}