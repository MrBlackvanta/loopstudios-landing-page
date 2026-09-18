import { Logo } from "@/components/icons";
import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

export default function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 text-white">
      <div className="mx-auto flex w-full max-w-289.5 items-center justify-between px-6 pt-10 lg:pt-16">
        <p className="flex">
          <Logo className="h-6 w-36 lg:h-8 lg:w-48" />
          <span className="sr-only">Loopstudios</span>
        </p>
        <nav aria-label="Primary" className="hidden lg:block">
          <NavLinks variant="header" />
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
