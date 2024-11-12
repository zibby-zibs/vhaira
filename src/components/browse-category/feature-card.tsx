import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

interface FeatureCardProps {
  category: string;
  title: string;
  imageUrl: StaticImageData;
  className?: string;
}

export default function FeatureCard({
  category,
  title,
  imageUrl,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "relative h-[600px] w-[400px] overflow-hidden rounded-3xl flex-shrink-0",
        className
      )}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl.src})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        {/* Category */}
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm text-white font-medium">
            {category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-white text-4xl font-bold leading-tight max-w-[80%]">
          {title}
        </h2>
      </div>
    </div>
  );
}
