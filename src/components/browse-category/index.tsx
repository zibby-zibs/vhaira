import React from "react";
import CategoryContainer from "./category-container";
import {
  hair_care,
  hair_styling,
  hair_accessories,
  hair_wigs,
} from "@/assets/images";

const BrowseCategory = () => {
  const features = [
    {
      id: "1",
      category: "Hair Care",
      title: "Carefully selected hair care products.",
      imageUrl: hair_care,
    },
    {
      id: "2",
      category: "Hair Styling",
      title: "Enhance your style.",
      imageUrl: hair_styling,
    },
    {
      id: "3",
      category: "Hair Accessories",
      title: "Accessories for your hair.",
      imageUrl: hair_accessories,
    },
    {
      id: "4",
      category: "Hair Wigs",
      title: "Wigs for your hair.",
      imageUrl: hair_wigs,
    },
  ];

  return (
    <main>
      <h1 className="text-center text-4xl lg:text-5xl font-jost text-primary font-semibold">
        BROWSE CATEGORIES
      </h1>

      <div className="mt-12">
        <CategoryContainer features={features} />
      </div>
    </main>
  );
};

export default BrowseCategory;
