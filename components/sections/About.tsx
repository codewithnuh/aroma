import Image from "next/image";
import React from "react";

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
        <div className="grid md:grid-cols-2">
          <div>
            <h2 className="text-left leading-10 text-primary sm:leading-20">
              Good Vibes. <br />
              Great Vibes.{" "}
            </h2>
            <p className="mt-5 text-left text-primary">
              At Brewhaus, we serve great coffee and fresh pastries with care
              and passion, creating a warm, cozy space that feels like home.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutFeatures.map((item, index) => (
                <div
                  className="mt-5 flex flex-col items-center justify-center space-y-2 border-2 border-t-0 border-l-0 border-gray-200 p-6"
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
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
