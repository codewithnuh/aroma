import Image from "next/image";
import React from "react";
import { Card, CardContent } from "../ui/card";

const About = () => {
  const aboutFeatures = [
    {
      icon: "/icon.svg",
      label: "Great Coffee \n Tasty Sips",
    },
    {
      icon: "/icon.svg",
      label: "Great Coffee \n Tasty Sips",
    },
    {
      icon: "/icon.svg",
      label: "Great Coffee \n Tasty Sips",
    },
    {
      icon: "/icon.svg",
      label: "Great Coffee \n Tasty Sips",
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="containerStyles">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h2 className="text-left leading-10 text-primary sm:leading-20">
              Good Vibes. <br />
              Great Vibes.{" "}
            </h2>
            <p className="mt-5 text-left text-primary">
              At Brewhaus, we serve great coffee and fresh pastries with care
              and passion, creating a warm, cozy space that feels like home.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutFeatures.map((item, index) => (
                <div
                  className="mt-5 flex items-center justify-center space-y-2 border-2 border-t-0 border-l-0 border-gray-200 p-6 sm:flex-col"
                  key={index}
                >
                  <Image src={item.icon} width={50} height={50} alt="ICON" />
                  <span className="max-w-36 font-heading text-lg text-primary">
                    {" "}
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Updated grid container for the responsive layout */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2">
            {/* First image - spans 2 rows on desktop */}
            <Card className="group p-0 shadow-lg transition-shadow duration-300 hover:shadow-xl md:row-span-2">
              <CardContent className="h-full p-0">
                <div className="relative h-96 overflow-hidden rounded-lg md:h-full">
                  <Image
                    src="/coffee-maker.avif"
                    alt="Premium coffee experience"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </CardContent>
            </Card>

            {/* Second image - normal height */}
            <Card className="h-72 w-auto p-0">
              <CardContent className="relative h-full p-0">
                <Image
                  src="/coffee-shop.avif"
                  alt="Coffee"
                  fill
                  className="rounded-lg object-cover"
                />
              </CardContent>
            </Card>

            {/* Third image - normal height */}
            <Card className="h-72 w-auto p-0">
              <CardContent className="relative h-full p-0">
                <Image
                  src="/matcha.avif"
                  alt="Coffee"
                  fill
                  className="rounded-lg object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
