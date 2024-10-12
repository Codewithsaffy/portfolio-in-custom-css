import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import testimonials from "@/data/testinominal";

const Testinominal = () => {
  return (
    <section id="testimonial" className="z-10 w-full flex-col flex  items-center gap-10 md:gap-20 mx-auto px-4  md:px-8 lg:px-16 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold z-10 text-center">
        Kind words from <span className="text-[#CBACF0]">satisfied clients</span>
      </h2>
      <InfiniteMovingCards
      className=""
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
};

export default Testinominal;
