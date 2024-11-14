"use client";

import React from "react";

interface CurvedContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function CurvedContainer({
  children,
  className = "",
}: CurvedContainerProps) {
  const uniqueId = React.useId();
  const clipPathId = `curve-${uniqueId}`;

  return (
    <>
      <div
        className={`relative ${className}`}
        style={{
          clipPath: `url(#${clipPathId})`,
        }}
      >
        {children}
      </div>

      <svg width="0" height="0">
        <defs>
          <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
            <path
              d="M 0,1
                L 0,0
                C .35 .2, .65 .2, 1 0
                L 1,1
                C .65 .8, .35 .8, 0 1
                Z"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
