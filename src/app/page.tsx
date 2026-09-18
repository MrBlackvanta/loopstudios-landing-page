import { SiteHeader } from "@/components/layout";
import { HeroSection } from "@/views/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
