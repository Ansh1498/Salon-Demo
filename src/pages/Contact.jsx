import ContactInfo from '../sections/contact/ContactInfo'
import ContactForm from '../sections/contact/ContactForm'
import usePageTitle from '../hooks/usePageTitle'

export default function Contact() {
  usePageTitle('Contact')
  return (
    <section className="flex flex-col gap-12 px-6 pt-8 pb-20 md:px-12 lg:flex-row lg:items-start lg:gap-16">
      <div className="lg:flex-1">
        <ContactInfo />
      </div>
      <div className="lg:flex-1">
        <ContactForm />
      </div>
    </section>
  )
}