import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/globals/Navbar";
import { StickyBanner } from "@/components/ui/sticky-banner";

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};
const CalistogaFont = localFont({
  src: "./fonts/Calistoga-Regular.ttf",
  variable: "--font-calistoga",
});
const DM_SansFont = localFont({
  src: [
    {
      path: "./fonts/DMSans-Regular.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/DMSans-SemiBold.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],

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
      <body className="overflow-hidden bg-primary">
        <div>
          <StickyBanner className="bg-gradient-to-b from-yellow-300 to-yellow-400">
            <p className="containerStyles mx-0 text-green-900 drop-shadow-md">
              Announcing $10M seed funding from project mayhem ventures.{" "}
              <a href="#" className="transition duration-200 hover:underline">
                Read announcement
              </a>
            </p>
          </StickyBanner>
        </div>
        <div className="flex items-center justify-center">
          <Navbar />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
