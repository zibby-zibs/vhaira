import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const testimonials = defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  icon: UserIcon as any,
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "review",
      title: "Review",
      type: "text",
    }),
  ],
});
