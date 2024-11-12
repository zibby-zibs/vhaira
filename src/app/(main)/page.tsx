import AboutVhaira from "@/components/about";
import VisualHero from "@/components/global/visual-hero";
// import Image from "next/image";
import ParallaxSection from "@/components/global/parallax-section";
import BrowseCategory from "@/components/browse-category";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Transformation from "@/components/transformation";

export default function Home() {
  const data = [
    "https://res.cloudinary.com/dk1wsirgg/video/upload/v1731104113/vhaira/q0qzrkydq2vpmwwhionn.mp4",
  ];

  const compareData = [
    {
      id: 1,
      firstImage:
        "https://img.freepik.com/free-photo/beautiful-strong-confident-black-model-khaki-thin-coat-isolated-white_633478-1224.jpg?uid=R38132337&ga=GA1.1.452279408.1726766691&semt=ais_hybrid",
      secondImage:
        "https://img.freepik.com/premium-photo/young-caucasian-woman-with-color-dreadlocks-sits-couch-touches-her-hair-vertical-frame_134398-21851.jpg?uid=R38132337&ga=GA1.1.452279408.1726766691&semt=ais_hybrid",
    },
    {
      id: 2,
      firstImage:
        "https://img.freepik.com/free-photo/beautiful-woman-posing-studio_23-2148661295.jpg?uid=R38132337&ga=GA1.1.452279408.1726766691&semt=ais_hybrid",
      secondImage:
        "https://img.freepik.com/free-photo/black-woman-white-shirt-curly-hair_633478-2403.jpg?uid=R38132337&ga=GA1.1.452279408.1726766691&semt=ais_hybrid",
    },
    {
      id: 3,
      firstImage:
        "https://img.freepik.com/free-photo/beautiful-woman-posing-studio_23-2148661295.jpg?uid=R38132337&ga=GA1.1.452279408.1726766691&semt=ais_hybrid",
      secondImage:
        "https://img.freepik.com/free-photo/black-woman-white-shirt-curly-hair_633478-2403.jpg?uid=R38132337&ga=GA1.1.452279408.1726766691&semt=ais_hybrid",
    },
    {
      id: 4,
      firstImage:
        "https://img.freepik.com/free-photo/beautiful-woman-posing-studio_23-2148661295.jpg?uid=R38132337&ga=GA1.1.452279408.1726766691&semt=ais_hybrid",
      secondImage:
        "https://img.freepik.com/free-photo/black-woman-white-shirt-curly-hair_633478-2403.jpg?uid=R38132337&ga=GA1.1.452279408.1726766691&semt=ais_hybrid",
    },
    {
      id: 5,
      firstImage:
        "https://img.freepik.com/free-photo/beautiful-woman-posing-studio_23-2148661295.jpg?uid=R38132337&ga=GA1.1.452279408.1726766691&semt=ais_hybrid",
      secondImage:
        "https://img.freepik.com/free-photo/black-woman-white-shirt-curly-hair_633478-2403.jpg?uid=R38132337&ga=GA1.1.452279408.1726766691&semt=ais_hybrid",
    },
  ];
  return (
    <main>
      <section className="bg-foreground">
        <div className="-mt-[90px] relative">
          <VisualHero data={data} type="video" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-5">
            <article className="text-center max-w-2xl">
              <h1 className="font-oreloBold text-7xl lg:text-9xl text-primary">
                Your Hair, Our Art
              </h1>
              <p className="text-lg lg:text-xl font-jost mt-3">
                Vhaira is a personalized hair experience, crafted with
                dedication and passion with a magical touch. Every style is a
                one-on-one masterpiece, tailored to bring out the best version
                of you. Discover the touch of artistry that makes Vhaira unique.
              </p>

              <Button className="mt-9 rounded-full bg-secondary font-jost font-medium text-xl">
                Book Consultation
                <ArrowRight />
              </Button>
            </article>
          </div>
        </div>

        <div className="bg-foreground">
          <ParallaxSection>
            <section className="bg-foreground relative z-10 py-10">
              <div className="container">
                <BrowseCategory />
              </div>
            </section>
          </ParallaxSection>
          <section className="container">
            <Transformation data={compareData} />
            <AboutVhaira />
          </section>
        </div>
      </section>
    </main>
  );
}
