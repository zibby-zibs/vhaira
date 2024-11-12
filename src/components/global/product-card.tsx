"use client";

import { cn } from "@/lib/utils";

import { FaCartPlus } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  product: {
    name: string;
    image: string;
    color: string;
    price: string;
  };
  className?: string;
  imageClassName?: string;
  featured?: boolean;
};

const ProductCard = ({
  product,
  className,
  imageClassName,
  featured = false,
}: Props) => {
  return (
    <div className={cn("relative", className)}>
      <aside className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className={cn("w-full object-cover h-[350px] lg:h-[450px]")}
        />
        <motion.div
          className="absolute right-0 bottom-5 flex items-center overflow-hidden bg-primary rounded-l-full border-l-4 border-t-4 border-b-4 border-foreground"
          initial={{ width: "55px" }}
          whileHover={{ width: "150px" }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
            duration: 0.2,
          }}
        >
          <div className="flex items-center justify-between w-full p-3 gap-2 whitespace-nowrap group cursor-pointer">
            <FaCartPlus className="text-white min-h-6 min-w-6" size={24} />
            <motion.span className="text-white font-medium font-noto group-hover:opacity-100 opacity-0 duration-100">
              Add to Cart
            </motion.span>
          </div>
        </motion.div>
      </aside>

      <div className="mt-3 text-white font-jost rounded-lg">
        <div className="flex justify-between gap-2 items-center">
          <article>
            <h3 className="text-lg">{product.name}</h3>

            <p className="font-light py-2">&#8358;{product.price}</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
