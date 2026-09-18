import type { Creation } from "@/data";

export default function CreationCard({
  title,
  href,
  mobileImage,
  desktopImage,
}: Creation) {
  return (
    <a href={href} className="v-focus-ring group relative block text-black">
      <picture>
        <source media="(min-width: 64rem)" srcSet={desktopImage.src} />
        <img
          src={mobileImage.src}
          alt=""
          width={mobileImage.width}
          height={mobileImage.height}
          loading="lazy"
          className="block w-full object-cover lg:h-112.5"
        />
      </picture>
      <span className="v-tile-scrim lg:v-tile-scrim-y absolute inset-0" />
      <span className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/75 motion-reduce:transition-none" />
      <h3 className="v-display text-tile lg:text-tile-lg absolute bottom-5 left-5 whitespace-pre-line text-white transition-colors duration-300 group-hover:text-black motion-reduce:transition-none lg:bottom-8 lg:left-10">
        {title}
      </h3>
    </a>
  );
}
