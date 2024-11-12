import React from "react";
import ProductCard from "../global/product-card";

type Props = {
  data: {
    id: number;
    name: string;
    image: string;
    color: string;
    price: string;
  }[];
};

const FrequentlyBought = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FrequentlyBought;
