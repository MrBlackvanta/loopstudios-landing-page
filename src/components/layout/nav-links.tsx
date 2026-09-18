import { navLinks } from "@/data";

type NavVariant = "header" | "menu";

const styles: Record<NavVariant, { list: string; link: string }> = {
  header: {
    list: "flex items-center gap-8",
    link: "relative after:absolute after:top-full after:left-1/2 after:mt-2 after:h-0.5 after:w-6 after:-translate-x-1/2 after:scale-x-0 after:bg-current after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none",
  },
  menu: {
    list: "flex flex-col gap-6",
    link: "v-display text-menu",
  },
};

type NavLinksProps = {
  variant: NavVariant;
  onNavigate?: () => void;
};

export default function NavLinks({ variant, onNavigate }: NavLinksProps) {
  const style = styles[variant];

  return (
    <ul className={style.list}>
      {navLinks.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            onClick={onNavigate}
            className={`v-focus-ring block w-fit ${style.link}`}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
