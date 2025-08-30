import Image from "next/image";
import TestimonialCard from "../shared/testimonialCard";
import { Button } from "@/components/ui/button";

// Data structure for the grid items
const contentGridItems = [
  {
    type: "testimonial",
    quote: `Brewhaus has spoiled other coffee shops for me – in the best way. Great espresso, fresh pastries, and a team that makes you feel like a regular from day one.`,
    author: "Patrick M.",
    title: "Espresso lover",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    type: "image",
    url: "/cold-coffee.avif",
    alt: "Iced coffee with milk being poured in.",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    type: "testimonial",
    quote:
      "Always a warm, welcoming vibe – perfect for a quick coffee or a quiet read. The banana bread? Totally addictive.",
    author: "Stella R.",
    title: "Coffee fan",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    type: "image",
    url: "/coffee-2.avif",
    alt: "Milk being poured into a white coffee mug.",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    type: "testimonial",
    quote:
      "I stop by every morning before work, and it's the best part of my day. The iced latte is my go-to, but I've honestly never had a bad drink here. Everything tastes handcrafted and full of care.",
    author: "Jordan T.",
    title: "Iced latte addict",
    colSpan: 1,
    rowSpan: 1,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-amber-50 py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-5xl leading-tight font-bold text-primary">
            What People
            <br />
            Love About Us
          </h2>
        </div>

        {/* Grid Layout - Matches the image exactly */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          {/* First Row: Left Testimonial + Center Image + Right Testimonial */}
          <div className="flex flex-col gap-6 md:col-span-1">
            {/* Top-left testimonial */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="font-heading text-2xl font-bold text-green-800">
                “
              </div>
              <p className="font-heading text-sm leading-relaxed text-primary">
                {contentGridItems[0].quote}
              </p>
              <p className="mt-3 text-xs font-medium text-green-800">
                {contentGridItems[0].author} – {contentGridItems[0].title}
              </p>
            </div>

            {/* Bottom-left image */}
            <div className="aspect-square overflow-hidden rounded-lg border border-gray-200">
              <Image
                src="/coffee-3.avif"
                alt="Hand pouring milk into a coffee cup"
                width={300}
                height={200}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Center column: Two stacked images */}
          <div className="flex flex-col gap-6 md:col-span-1">
            {/* Top center image */}
            <div className="aspect-square overflow-hidden rounded-lg border border-gray-200">
              <Image
                src="/cold-coffee.avif"
                alt="Iced coffee with milk being poured in"
                width={300}
                height={200}
                className="w-full object-cover"
              />
            </div>

            {/* Bottom center testimonial */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="font-heading text-2xl font-bold text-green-800">
                “
              </div>
              <p className="font-heading text-sm leading-relaxed text-primary">
                {contentGridItems[4].quote}
              </p>
              <p className="mt-3 text-xs font-medium text-green-800">
                {contentGridItems[4].author} – {contentGridItems[4].title}
              </p>
            </div>
          </div>

          {/* Right column: Top testimonial + Bottom image */}
          <div className="flex flex-col gap-6 md:col-span-1">
            {/* Top-right testimonial */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="font-heading text-2xl font-bold text-green-800">
                “
              </div>
              <p className="font-heading text-sm leading-relaxed text-primary">
                {contentGridItems[2].quote}
              </p>
              <p className="mt-3 text-xs font-medium text-green-800">
                {contentGridItems[2].author} – {contentGridItems[2].title}
              </p>
            </div>

            {/* Bottom-right image */}
            <div className="aspect-square overflow-hidden rounded-lg border border-gray-200">
              <Image
                src="/coffee-2.avif"
                alt="Latte art being poured"
                width={300}
                height={200}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* "Our Locations" Button */}
        <div className="mt-12 flex justify-center">
          <Button className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-white hover:bg-primary">
            Our Locations
          </Button>
        </div>
      </div>
    </section>
  );
}
