import React from "react";
import MediaUpload from "./components/media-upload";
import GalleryComponent from "@/components/global/gallery-component";
import { fetchAllMedia } from "@/app/actions/media";

const MediaPage = async () => {
  const { data, success } = await fetchAllMedia();

  return (
    <main className="container mx-auto py-8 text-black">
      <h1 className="text-4xl font-bold font-noto text-secondary py-3">
        Media
      </h1>

      <section className="py-8">
        <MediaUpload />
      </section>

      <section>
        <h1 className="text-4xl font-bold font-noto text-secondary py-3">
          Gallery
        </h1>

        <aside>
          {success ? (
            <GalleryComponent src={data ?? []} />
          ) : (
            <p>Error Getting Data</p>
          )}
        </aside>
      </section>
    </main>
  );
};

export default MediaPage;