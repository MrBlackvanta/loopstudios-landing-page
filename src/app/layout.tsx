import { SITE_URL } from "@/app/site";
import type { Metadata, Viewport } from "next";
import { Alata, Josefin_Sans } from "next/font/google";
import "./globals.css";

const name = "Loopstudios";
const title = `${name} | Immersive VR experiences`;
const description =
  "A virtual reality studio building immersive, award-winning VR projects for the world's best brands. Explore our creations.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "The Loopstudios name beside a neon virtual reality scene.",
};

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const alata = Alata({
  variable: "--font-alata",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${alata.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
