import React from "react";
import { Calistoga, DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/globals/Navbar";
import { StickyBanner } from "@/components/ui/sticky-banner";

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};
const CalistogaFont = Calistoga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-calistoga",
});
const DM_SansFont = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-dm_sans",
});

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  console.log(CalistogaFont.variable);

  return (
    <html
      lang="en"
      className={`${clsx(CalistogaFont.variable, DM_SansFont.variable)}`}
    >
      <body>
        <div className="bg-primary">
          <StickyBanner className="bg-gradient-to-b from-yellow-300 to-yellow-400 py-2">
            <p className="mx-0 max-w-[90%] text-green-900 drop-shadow-md">
              Announcing $10M seed funding from project mayhem ventures.{" "}
              <a href="#" className="transition duration-200 hover:underline">
                Read announcement
              </a>
            </p>
          </StickyBanner>
        </div>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
