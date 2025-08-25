import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center bg-primary">
      <div className="containerStyles">
        <div className="mt-8">
          <h1>
            Life Begins <br /> After Coffee
          </h1>
          <p className="mt-4">
            Because great coffee is start of something great
          </p>
          <div className="mt-4 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-5">
            <Button
              variant={"default"}
              className="w-full bg-primary-foreground text-green-800 hover:cursor-pointer hover:bg-primary-foreground/90 hover:text-green-800 sm:w-auto"
            >
              Explore Menu
            </Button>
            <Button
              variant={"outline"}
              className="w-full border-primary-foreground bg-transparent! text-primary-foreground hover:cursor-pointer hover:bg-primary-foreground! hover:text-green-800 sm:w-auto"
            >
              Explore Location
            </Button>
          </div>
        </div>
        <div className="mt-14 items-center justify-center sm:flex sm:space-x-2">
          <Image
            className="mt-12 hidden -rotate-12 md:block"
            src={"/coffee.avif"}
            width={290}
            height={290}
            alt="coffee"
          />
          <Image src={"/coffee.avif"} width={400} height={400} alt="coffee" />
          <Image
            className="mt-10 hidden rotate-12 md:block"
            src={"/coffee.avif"}
            width={290}
            height={290}
            alt="coffee"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
