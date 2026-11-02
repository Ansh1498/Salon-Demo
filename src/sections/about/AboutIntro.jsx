import Button from "../../components/ui/Button";
import ArchImage from "../../components/ui/ArchImage";

export default function AboutIntro() {
  return (
    <section className="flex flex-col items-center gap-12 px-6 pt-8 md:px-12 lg:flex-row lg:gap-16">
      <ArchImage
        src="/images/about.jpg"
        alt="Inside Dario Salon"
        label="[SALON INTERIOR PHOTO]"
        className="h-[420px] w-full max-w-md lg:h-[520px] lg:w-[460px] lg:max-w-none lg:shrink-0"
      />

      <div className="max-w-xl">
        <p className="font-serif text-2xl text-sand md:text-3xl">
          About Dario Salon
        </p>
        <h1 className="mt-2 mb-7 font-serif text-5xl leading-none md:text-7xl">
          Hair is personal.
          <br />
          <span className="text-tan">So is the care.</span>
        </h1>
        <p className="mb-8 text-xl leading-relaxed font-light text-cream/90">
          Every visit starts with listening. [ADD YOUR STORY: when you opened,
          your approach, what makes your salon different.]
        </p>
        <Button to="/contact">Book an appointment</Button>
      </div>
    </section>
  );
}
