"use client";

import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Compare } from "../ui/compare";
import { Button } from "../ui/button";

type TransformationProps = {
  data: {
    id: number;
    firstImage: string;
    secondImage: string;
  }[];
};
export default function Transformation({ data }: TransformationProps) {
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
    <section className="relative py-10 w-full">
      <h1 className="text-center text-4xl lg:text-5xl font-jost text-primary font-semibold uppercase py-8">
        Before & After
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {data.map((item) => (
          <div key={item.id}>
            <Compare
              firstImage={item.firstImage}
              secondImage={item.secondImage}
              firstImageClassName="object-cover"
              secondImageClassname="object-cover"
              className="h-[250px] max-w-full md:h-[500px] md:max-w-[500px] w-full"
              slideMode="hover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
