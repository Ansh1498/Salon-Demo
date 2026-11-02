import ServicesGrid from '../sections/services/ServicesGrid'
import usePageTitle from '../hooks/usePageTitle'

export default function Services() {
  usePageTitle('Services')
  return <ServicesGrid />
}