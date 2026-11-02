import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "../../components/ui/Button";
import ArchImage from "../../components/ui/ArchImage";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Intro animation (jin logon ne "reduce motion" on kiya hai unke liye nahi chalega)
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power4.out" },
          delay: 0.2,
        });

        tl.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.8 })
          .from(
            ".hero-line",
            { yPercent: 110, duration: 1.1, stagger: 0.15 },
            "-=0.5",
          )
          .from(
            ".hero-pill",
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.6",
          )
          .from(".hero-btn", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
          .from(
            ".hero-arch",
            {
              clipPath: "inset(100% 0% 0% 0%)",
              duration: 1.3,
              ease: "power3.inOut",
            },
            0.3,
          );
      });

      // Scroll parallax (sirf desktop par)
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.to(".hero-arch", {
            y: -60,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        },
      );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="flex flex-col items-start justify-between gap-10 px-6 pt-12 md:px-12 lg:flex-row lg:items-end lg:pt-20"
    >
      <div className="pb-12 lg:pb-16">
        <p className="hero-eyebrow font-serif text-2xl text-sand md:text-3xl">
          Welcome to Dario Salon
        </p>

        <h1 className="mt-2 mb-10 font-serif text-5xl leading-none sm:text-6xl md:text-8xl xl:text-9xl">
          <span className="block overflow-hidden py-[0.06em]">
            <span className="hero-line block">
              Your Hair
              <span
                role="img"
                aria-label="Hair photo"
                className="hero-pill mx-2 inline-block h-[0.8em] w-[1.3em] rounded-full bg-cover bg-center align-middle"
                style={{
                  backgroundImage:
                    "url(/images/hair-pill.jpg), linear-gradient(135deg,#8A5A3A,#3A2A20 60%,#E8D8C0)",
                  filter: "sepia(0.25) saturate(0.9)",
                }}
              />
            </span>
          </span>
          <span className="block overflow-hidden py-[0.06em]">
            <span className="hero-line block">
              in the <span className="text-tan">best hands</span>
            </span>
          </span>
        </h1>

        {/* Button ko wrapper me rakha hai, kyunki Button par pehle se CSS transition hai
            jo GSAP ke saath mil kar animation ko dheema kar deta */}
        <div className="hero-btn">
          <Button to="/contact">Appointments</Button>
        </div>
      </div>

      <ArchImage
        src="/images/hero.jpg"
        alt="Stylist styling a client's hair"
        label="[SALON PHOTO]"
        className="hero-arch h-[420px] w-full max-w-md self-center lg:h-[560px] lg:w-[460px] lg:self-auto"
      />
    </section>
  );
}
