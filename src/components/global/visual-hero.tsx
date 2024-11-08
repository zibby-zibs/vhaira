"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface VisualHeroProps {
  type: "video" | "image";
  data: string[];
}

const VisualHero = ({ type, data }: VisualHeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      // Wait for fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
        // Reset transition state after content changes
        setIsTransitioning(false);
      }, 100); // This should match the CSS transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="w-full h-svh relative max-h-screen">
      <div
        className={`transition-opacity duration-500 ease-in-out h-screen w-screen max-h-screen max-w-[100vw] overflow-hidden
        ${isTransitioning ? "opacity-90" : "opacity-100"}`}
      >
        {type === "video" ? (
          <video
            key={data[currentIndex]}
            src={data[0]}
            autoPlay
            controls={false}
            muted
            loop
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={data[currentIndex]}
            alt="Visual Hero"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
        )}
      </div>
    </div>
  );
};

export default VisualHero;
