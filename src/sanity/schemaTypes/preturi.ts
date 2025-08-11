import { defineType, defineField } from "sanity";

export default defineType({
  name: "preturi",
  title: "Prețuri",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titlu card",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descriere",
      type: "text",
    }),
    defineField({
      name: "prices",
      title: "Lista de prețuri",
      type: "array",
      of: [
        defineField({
          name: "priceItem",
          title: "Preț",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Etichetă",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "price",
              title: "Preț",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});
