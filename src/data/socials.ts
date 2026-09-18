import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";
import type { NavLink } from "./nav";

export type SocialLink = NavLink & {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "Pinterest", href: "#", icon: PinterestIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];
