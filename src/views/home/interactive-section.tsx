import interactiveDesktop from "@/assets/images/desktop/image-interactive.webp";
import interactiveMobile from "@/assets/images/mobile/image-interactive.webp";

export default function InteractiveSection() {
  return (
    <section aria-labelledby="interactive-title" className="pt-24 lg:pt-40">
      <div className="mx-auto w-full max-w-289.5 px-6">
        <div className="mx-auto max-w-182.5 lg:relative lg:max-w-none">
          <img
            src={interactiveDesktop.src}
            srcSet={`${interactiveMobile.src} ${interactiveMobile.width}w, ${interactiveDesktop.src} ${interactiveDesktop.width}w`}
            sizes="(min-width: 64rem) 730px, calc(100vw - 3rem)"
            alt=""
            width={interactiveMobile.width}
            height={interactiveMobile.height}
            loading="lazy"
            className="block w-full object-cover lg:h-125 lg:w-182.5"
          />
          <div className="mx-auto max-w-111.25 px-6 pt-12 text-center md:px-0 lg:absolute lg:right-0 lg:bottom-0 lg:w-135.25 lg:max-w-none lg:bg-white lg:pt-24 lg:pl-24 lg:text-left">
            <h2
              id="interactive-title"
              className="v-display text-section lg:text-section-lg"
            >
              The leader in interactive VR
            </h2>
            <p className="text-ink-muted mt-4 lg:mt-6.25">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
