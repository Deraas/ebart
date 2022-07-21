export default {
  name: "verk",
  title: "Verk",
  type: "document",
  fields: [
    {
      name: "verkkode",
      title: "Verkkode",
      type: "string",
      description: "Identifikasjonskode på verk",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Navn på verk",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
