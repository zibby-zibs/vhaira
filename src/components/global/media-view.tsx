import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  className?: string;
};

const MediaView = ({ src, className = "" }: Props) => {
  // Get file extension using regex to match the last occurrence
  const fileExtension = src?.match(/\.([^.]+)$/)?.[1]?.toLowerCase();

  // Define supported file types
  const imageTypes = ["jpg", "jpeg", "png", "gif", "webp"];
  const videoTypes = ["mp4", "webm", "ogg"];

  if (!src) return null;

  if (imageTypes.includes(fileExtension || "")) {
    return (
      <Image
        src={src}
        alt="Media content"
        width={500}
        height={500}
        className={`object-cover ${className}`}
      />
    );
  }

  if (videoTypes.includes(fileExtension || "")) {
    return (
      <video controls className={`w-full ${className}`}>
        <source src={src} type={`video/${fileExtension}`} />
        Your browser does not support the video tag.
      </video>
    );
  }

  // Fallback for unsupported file types
  return <div>Unsupported media type</div>;
};

export default MediaView;
