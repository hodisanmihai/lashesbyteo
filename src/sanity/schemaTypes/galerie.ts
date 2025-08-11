import { defineType, defineField } from "sanity";

export default defineType({
  name: "galerie",
  title: "Galerie",
  type: "document",
  fields: [
    defineField({
      name: "images",
      title: "Imagini",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
});
