import { creations } from "@/data";
import CreationCard from "./creation-card";

export default function CreationsSection() {
  return (
    <section aria-labelledby="creations-title" className="py-24 lg:py-46">
      <div className="mx-auto w-full max-w-289.5 px-6">
        <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
          <h2
            id="creations-title"
            className="v-display text-section lg:text-section-lg text-center lg:text-left"
          >
            Our creations
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:col-span-2 lg:mt-20 lg:grid-cols-4 lg:gap-7.5">
            {creations.map((creation) => (
              <li key={creation.title}>
                <CreationCard {...creation} />
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="v-focus-ring text-label tracking-label mt-8.5 inline-flex h-10 items-center justify-center justify-self-center border border-black px-9.25 uppercase transition-colors duration-300 hover:bg-black hover:text-white motion-reduce:transition-none lg:col-start-2 lg:row-start-1 lg:mt-0"
          >
            See all
          </a>
        </div>
      </div>
    </section>
  );
}
