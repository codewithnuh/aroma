import React from "react";
import { Card, CardContent } from "@/components/ui/card"; // Make sure this path is correct based on your project structure

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  title,
}) => {
  return (
    <Card className="flex h-full flex-col justify-between rounded-xl border-none bg-slate-50 p-6 shadow-md">
      {/* Quote symbol */}
      <div className="absolute top-2 left-4 font-serif text-6xl text-slate-300">
        &ldquo;
      </div>

      {/* Testimonial content */}
      <CardContent className="flex flex-col p-0">
        <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-800 italic">
          {quote}
        </p>
        <div className="mt-auto">
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
