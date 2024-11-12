import AboutVhaira from "@/components/about";
import VisualHero from "@/components/global/visual-hero";
// import Image from "next/image";
import ParallaxSection from "@/components/global/parallax-section";
import BrowseCategory from "@/components/browse-category";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Transformation from "@/components/transformation";
import { AnimatedTestimonials } from "@/components/global/animated-testimonials";
import FrequentlyBought from "@/components/frequently-bought-product";

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

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Face Oil Serum",
      image: "/2149016619.jpg",
      color: "Red",
      price: "10,000",
    },
    {
      id: 2,
      name: "Face Oil Serum",
      image: "/2149016619.jpg",
      color: "Blue",
      price: "20,000",
    },
    {
      id: 3,
      name: "Face Oil Serum",
      image: "/2149016619.jpg",
      color: "Green",
      price: "30,000",
    },
    {
      id: 4,
      name: "Face Oil Serum",
      image: "/2149016619.jpg",
      color: "Yellow",
      price: "40,000",
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
            <div>
              <h1 className="text-center text-4xl lg:text-5xl font-jost text-primary font-semibold uppercase py-8">
                Frequently Bought Products
              </h1>
              <FrequentlyBought data={products} />
            </div>
            <Transformation data={compareData} />

            <div className="mt-8 lg:mt-16">
              <h1 className="text-center text-4xl lg:text-5xl font-jost text-primary font-semibold uppercase py-8">
                Reviews
              </h1>
              <AnimatedTestimonials
                testimonials={testimonials}
                autoplay={true}
              />
            </div>
            <AboutVhaira />
          </section>
        </div>
      </section>
    </main>
  );
}
