import SectionHeading from "../../components/ui/SectionHeading";
import ArchImage from "../../components/ui/ArchImage";
import { team } from "../../data/team";
import FadeIn from "../../components/animations/FadeIn";

export default function Team() {
  return (
    <section className="px-6 pb-20 md:px-12 md:pb-24">
      <SectionHeading className="mb-10">The team</SectionHeading>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <FadeIn key={member.id} delay={i * 0.12}>
            <ArchImage
              src={member.image}
              alt={member.image ? member.name : ""}
              label="[PHOTO]"
              className="mb-4 aspect-[4/5] w-full"
            />
            <h3 className="font-serif text-3xl">{member.name}</h3>
            <p className="mt-1 text-sand">{member.role}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
