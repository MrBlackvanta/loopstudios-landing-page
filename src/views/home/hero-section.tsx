import heroDesktop from "@/assets/images/desktop/image-hero.webp";
import heroMobile from "@/assets/images/mobile/image-hero.webp";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative h-162.5">
      <picture className="absolute inset-0">
        <source media="(min-width: 48rem)" srcSet={heroDesktop.src} />
        <img
          src={heroMobile.src}
          alt=""
          width={heroMobile.width}
          height={heroMobile.height}
          fetchPriority="high"
          className="size-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 md:bg-black/40" />
      <div className="relative mx-auto w-full max-w-289.5 px-6 pt-56.75 lg:pt-56.5">
        <h1
          id="hero-title"
          className="v-display text-hero lg:text-hero-lg border-2 border-white px-5.5 pt-6 pb-4 text-white md:w-162.5 lg:p-9.5 lg:pb-6.5"
        >
          Immersive experiences that deliver
        </h1>
      </div>
    </section>
  );
}
