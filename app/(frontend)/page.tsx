import React from "react";
import Hero from "../../components/sections/Hero";
import Products from "@/components/sections/Products";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import TestimonialGrid from "@/components/sections/Testimonials";
import NearbyCafesSection from "@/components/sections/NearByPlaces";
const page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Products />
      <About />
      <TestimonialGrid />
      <NearbyCafesSection/>
    </div>
  );
};

export default page;
