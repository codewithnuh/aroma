import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="bg-gray-100">
      <div className="py-20">
        <h2>
          Find and Get <br /> What You Love
        </h2>
        <div className="grid-col-1 mt-10 grid place-items-center space-y-4 md:grid-cols-3 md:space-y-0 md:space-x-4">
          {[
            { src: "/coffee.avif", alt: "Coffee", label: "Coffee" },
            { src: "/mojito.avif", alt: "Mojito", label: "Mojito" },
            { src: "/baked.avif", alt: "Baked", label: "Bakery" },
          ].map((item, index) => (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex h-72 w-72 items-center justify-center overflow-hidden rounded-full bg-primary p-6">
                <Image
                  className="mt-28"
                  src={item.src}
                  width={230}
                  height={230}
                  alt={item.label}
                />
              </div>
              <span className="font-heading text-4xl text-primary">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
