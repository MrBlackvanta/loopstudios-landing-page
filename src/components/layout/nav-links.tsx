import { navLinks } from "@/data";

type NavVariant = "header" | "footer" | "menu";

const styles: Record<NavVariant, { list: string; link: string }> = {
  header: {
    list: "flex items-center gap-8",
    link: "v-underline-slide",
  },
  footer: {
    list: "flex flex-col items-center gap-4 lg:flex-row lg:gap-8",
    link: "v-underline-slide",
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
