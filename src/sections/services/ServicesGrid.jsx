import Button from "../../components/ui/Button";
import SectionHeading from "../../components/ui/SectionHeading";
import ServiceCard from "../../components/ui/ServiceCard";
import { services } from "../../data/services";
import FadeIn from "../../components/animations/FadeIn";

export default function ServicesGrid() {
  return (
    <section className="px-6 pt-12 pb-20 md:px-12 md:pt-16 md:pb-24">
      <SectionHeading eyebrow="Our Services" className="mb-12">
        Crafted for every <span className="text-tan">hair story</span>
      </SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <FadeIn key={service.id} delay={(i % 3) * 0.1} className="h-full">
            <ServiceCard {...service} />
          </FadeIn>
        ))}
      </div>

      <div className="pt-14">
        <Button to="/contact">Book an appointment</Button>
      </div>
    </section>
  );
}
