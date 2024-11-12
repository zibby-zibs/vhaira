import { product } from "./products";
import { category } from "./category";
import { testimonials } from "./testimonials";
import { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, testimonials],
};
