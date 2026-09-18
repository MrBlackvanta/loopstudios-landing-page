import { SiteHeader } from "@/components/layout";
import { HeroSection, InteractiveSection } from "@/views/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <InteractiveSection />
      </main>
    </>
  );
}
