import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muujis — Creative Digital Agency",
  description: "Muujis builds brands, digital experiences and growth strategies for ambitious businesses.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="so"><body>{children}</body></html>;
}
