"use client";

import React from "react";

interface ConcaveContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ConcaveContainer({
  children,
  className,
}: ConcaveContainerProps) {
  const uniqueId = React.useId();
  const maskId = `concave-mask-${uniqueId}`;

  return (
    <div className="relative w-full max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Concave Top */}
      <div className="absolute inset-x-0 -top-6 h-12 bg-white">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C480,100 960,0 1440,0 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Concave Bottom */}
      <div className="absolute inset-x-0 -bottom-6 h-12 bg-white">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C480,0 960,100 1440,100 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">{children}</div>
    </div>
  );
}
