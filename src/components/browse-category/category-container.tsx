"use client";

import React, { useRef } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeatureCard from "./feature-card";
import { StaticImageData } from "next/image";

type Props = {
  features: {
    id: string;
    category: string;
    title: string;
    imageUrl: StaticImageData;
  }[];
};

const CategoryContainer = ({ features }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420; // card width + gap
      const container = scrollContainerRef.current;
      const newScrollPosition =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-[90vw] mx-auto py-10">
      {/* Cards Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {features.map((feature) => (
          <div key={feature.id} className="snap-center mx-auto">
            <FeatureCard
              category={feature.category}
              title={feature.title}
              imageUrl={feature.imageUrl}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-5 justify-end items-center mt-5">
        <Button
          variant="secondary"
          size="icon"
          className=" backdrop-blur-sm"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Scroll left</span>
        </Button>

        <Button
          variant="secondary"
          size="icon"
          className=" backdrop-blur-sm"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>
    </div>
  );
};

export default CategoryContainer;
