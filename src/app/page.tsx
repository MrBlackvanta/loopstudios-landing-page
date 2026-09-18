import { SiteFooter, SiteHeader } from "@/components/layout";
import {
  CreationsSection,
  HeroSection,
  InteractiveSection,
} from "@/views/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <InteractiveSection />
        <CreationsSection />
      </main>
      <SiteFooter />
    </>
  );
}
