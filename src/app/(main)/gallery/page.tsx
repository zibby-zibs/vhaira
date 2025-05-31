import { fetchAllMedia } from "@/app/actions/media";
import CurvedContainer from "@/components/global/curved-container";
import GalleryComponent from "@/components/global/gallery-component";
import { unstable_noStore } from "next/cache";

const images = [
  "https://images.unsplash.com/photo-1560264641-1b5191cc63e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFpcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1549236177-f9b0031756eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhaXJ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1557353425-6c61136de070?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhaXJ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1557353425-6c61136de070?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhaXJ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1557353425-6c61136de070?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhaXJ8ZW58MHx8MHx8fDA%3D",
  // Add more image paths as needed
];

export default async function GalleryPage() {
  unstable_noStore();
  const { data, success } = await fetchAllMedia();
  return (
    <div className="min-h-screen p-8 space-y-8 bg-foreground text-white">
      <article className="text-center space-y-3 max-w-3xl mx-auto">
        <p className="font-oreloBold text-primary text-xl lg:text-3xl">
          VHAIRA
        </p>
        <h1 className="text-2xl lg:text-5xl font-semibold uppercase pt-2">
          Step Into a World of <span className="text-primary"> Creativity</span>
          : A Showcase of Artful Transformations
        </h1>
      </article>

      <CurvedContainer className="w-full h-[350px] lg:h-[600px]">
        <div className="w-full h-full overflow-hidden">
          <div className="animate-infinite-slider flex gap-5 w-[calc(300px*12)] h-full">
            {images.concat(images).map((logo, index) => (
              <div
                key={index}
                className="slide flex items-center justify-center h-full"
              >
                <div className="relative">
                  <img
                    src={logo}
                    alt={logo}
                    className="h-[600px] min-w-[300px] !object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CurvedContainer>

      <section>
        <h1 className="text-center text-3xl text-white py-14 max-w-2xl mx-auto font-jost">
          Discover the beauty in every strand. A tale of passion, precision, and
          artistry.
        </h1>
        {success ? (
          (data?.length ?? 0) > 0 ? (
            <GalleryComponent src={data ?? []} admin={false} />
          ) : (
            <p>Upload some media to get started</p>
          )
        ) : (
          <p>Error Getting Data</p>
        )}
      </section>
    </div>
  );
}
