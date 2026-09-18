import { Logo } from "@/components/icons";
import { socialLinks } from "@/data";
import NavLinks from "./nav-links";
import Signature from "./signature";

export default function SiteFooter() {
  return (
    <footer className="relative bg-black py-14 text-white lg:pt-11 lg:pb-10.75">
      <div className="mx-auto grid w-full max-w-289.5 justify-items-center px-6 lg:grid-cols-2 lg:justify-items-start lg:gap-y-6">
        <Logo className="h-6 w-36" />
        <nav
          aria-label="Footer"
          className="mt-8 lg:col-start-1 lg:row-start-2 lg:mt-0"
        >
          <NavLinks variant="footer" />
        </nav>
        <ul className="mt-12 flex gap-4 lg:col-start-2 lg:row-start-1 lg:mt-0 lg:justify-self-end">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="v-focus-ring v-underline-slide grid size-6 place-items-center"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-white/50 lg:col-start-2 lg:row-start-2 lg:mt-0 lg:justify-self-end">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
      <Signature />
    </footer>
  );
}
