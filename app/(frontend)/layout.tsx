import React from "react";
import { Calistoga, DM_Sans } from "next/font/google";
import "./styles.css";
import clsx from "clsx";

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

  return (
    <html lang="en">
      <body>
        <main
          className={`${clsx(CalistogaFont.className, DM_SansFont.className)}`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
