import { portrait } from "@/assets/images";
import Image from "next/image";
import React from "react";

const AboutVhaira = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" flex flex-col-reverse lg:flex-row lg:items-center gap-5 lg:justify-between">
        <article className="lg:max-w-2xl font-noto lg:text-lg text-white/80 font-light leading-7 space-y-6">
          <h1 className="uppercase font-jost font-medium text-4xl text-center text-secondary">
            About Vhaira
          </h1>
          <p>
            Miss Sijuade Omosewa Oladosu is the visionary behind VHAIRA, a brand
            built on passion, talent, skill, and a commitment to personalized
            beauty. The brand was founded in 2020 to redefine haircare by
            focusing on every client&apos;s unique style.
          </p>

          <p>
            Sijuade graduated with a double honors degree in English and French
            from the University of Ibadan, whilst juggling her business at the
            same time.
          </p>

          <p>
            Through a blend of talent and technique, Sijuade creates looks that
            inspire confidence and celebrates individuality. At Vhaira,
            it&apos;s not just about hair—it&apos;s about crafting an experience
            that leaves every client feeling empowered.
          </p>
        </article>
        <figure>
          <Image
            src={portrait}
            width={500}
            height={500}
            content="cover"
            alt="vhaira-portrait"
            className="rounded-full w-full max-w-[500px] mx-auto lg:mx-0 max-h-[500px] object-cover"
          />
        </figure>
      </div>
    </div>
  );
};

export default AboutVhaira;
