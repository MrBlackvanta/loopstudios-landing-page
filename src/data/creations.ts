import type { StaticImageData } from "next/image";

import curiosityDesktop from "@/assets/images/desktop/image-curiosity.webp";
import deepEarthDesktop from "@/assets/images/desktop/image-deep-earth.webp";
import fisheyeDesktop from "@/assets/images/desktop/image-fisheye.webp";
import fromAboveDesktop from "@/assets/images/desktop/image-from-above.webp";
import gridDesktop from "@/assets/images/desktop/image-grid.webp";
import nightArcadeDesktop from "@/assets/images/desktop/image-night-arcade.webp";
import pocketBorealisDesktop from "@/assets/images/desktop/image-pocket-borealis.webp";
import soccerTeamDesktop from "@/assets/images/desktop/image-soccer-team.webp";
import curiosityMobile from "@/assets/images/mobile/image-curiosity.webp";
import deepEarthMobile from "@/assets/images/mobile/image-deep-earth.webp";
import fisheyeMobile from "@/assets/images/mobile/image-fisheye.webp";
import fromAboveMobile from "@/assets/images/mobile/image-from-above.webp";
import gridMobile from "@/assets/images/mobile/image-grid.webp";
import nightArcadeMobile from "@/assets/images/mobile/image-night-arcade.webp";
import pocketBorealisMobile from "@/assets/images/mobile/image-pocket-borealis.webp";
import soccerTeamMobile from "@/assets/images/mobile/image-soccer-team.webp";

export type Creation = {
  title: string;
  href: string;
  mobileImage: StaticImageData;
  desktopImage: StaticImageData;
};

export const creations: Creation[] = [
  {
    title: "Deep\nEarth",
    href: "#",
    mobileImage: deepEarthMobile,
    desktopImage: deepEarthDesktop,
  },
  {
    title: "Night\nArcade",
    href: "#",
    mobileImage: nightArcadeMobile,
    desktopImage: nightArcadeDesktop,
  },
  {
    title: "Soccer\nTeam VR",
    href: "#",
    mobileImage: soccerTeamMobile,
    desktopImage: soccerTeamDesktop,
  },
  {
    title: "The\nGrid",
    href: "#",
    mobileImage: gridMobile,
    desktopImage: gridDesktop,
  },
  {
    title: "From Up\nAbove VR",
    href: "#",
    mobileImage: fromAboveMobile,
    desktopImage: fromAboveDesktop,
  },
  {
    title: "Pocket\nBorealis",
    href: "#",
    mobileImage: pocketBorealisMobile,
    desktopImage: pocketBorealisDesktop,
  },
  {
    title: "The\nCuriosity",
    href: "#",
    mobileImage: curiosityMobile,
    desktopImage: curiosityDesktop,
  },
  {
    title: "Make It\nFisheye",
    href: "#",
    mobileImage: fisheyeMobile,
    desktopImage: fisheyeDesktop,
  },
];
