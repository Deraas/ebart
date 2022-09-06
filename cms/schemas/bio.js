export default {
  name: "bio",
  title: "Bio",
  type: "document",
  fields: [
    {
      name: "bioname",
      title: "Navn på bio",
      type: "string",
    },
    {
      name: "title",
      title: "Biotittel",
      type: "string",
    },
    {
      name: "text",
      title: "Biotekst",
      type: "text",
    },
    {
      name: "bioimage",
      title: "Biobilde",
      type: "image",
    },
  ],
  preview: {
    select: { title: "bioname", media: "bioimage" },
  },
};
