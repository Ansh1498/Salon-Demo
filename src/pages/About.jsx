import AboutIntro from '../sections/about/AboutIntro'
import Values from '../sections/about/Values'
import Team from '../sections/about/Team'
import usePageTitle from '../hooks/usePageTitle'

export default function About() {
  usePageTitle('About')

  return (
    <>
      <AboutIntro />
      <Values />
      <Team />
    </>
  )
}