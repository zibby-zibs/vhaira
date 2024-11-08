import AboutVhaira from "@/components/about";
import VisualHero from "@/components/global/visual-hero";
// import Image from "next/image";
import ParallaxSection from "@/components/global/parallax-section";

export default function Home() {
  const data = [
    "https://res.cloudinary.com/dk1wsirgg/video/upload/v1731104113/vhaira/q0qzrkydq2vpmwwhionn.mp4",
  ];
  return (
    <main>
      <div className="-mt-[90px] relative">
        <VisualHero data={data} type="video" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-5">
          <article className="text-center max-w-2xl">
            <h1 className="font-oreloBold text-7xl lg:text-9xl text-primary">
              Your Hair, Our Art
            </h1>
            <p className="text-lg lg:text-xl font-jost mt-3">
              Vhaira is a personalized hair experience, crafted with dedication
              and passion with a magical touch. Every style is a one-on-one
              masterpiece, tailored to bring out the best version of you.
              Discover the touch of artistry that makes Vhaira unique.
            </p>
          </article>
        </div>
      </div>

      <ParallaxSection>
        <section className="bg-foreground relative z-10 h-full">
          <AboutVhaira />
        </section>
      </ParallaxSection>
    </main>
  );
}
