"use client";

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MediaView from "./media-view";
import { CloudinaryResource } from "@/app/actions/media";

type Props = {
  src: CloudinaryResource[];
};

const GalleryComponent = ({ src }: Props) => {
  return (
    <main>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        {/* @ts-expect-error - react-responsive-masonry types are incomplete */}
        <Masonry gutter={10}>
          {src.map((src) => (
            <MediaView
              src={src.secure_url}
              key={src.asset_id}
              className="rounded-lg"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </main>
  );
};

export default GalleryComponent;
