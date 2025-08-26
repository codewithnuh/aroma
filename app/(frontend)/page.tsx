import React from "react";
import Hero from "../../components/sections/Hero";
import Products from "@/components/sections/Products";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
const page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Products />
      <About />
    </div>
  );
};

export default page;
