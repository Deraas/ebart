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
      title: "Navn",
      type: "string",
      description: "Navn på verk",
    },
    {
      name: "hight",
      title: "Høyde",
      type: "number",
      description: "Høyde i cm",
    },
    {
      name: "length",
      title: "Lengde",
      type: "number",
      description: "Lengde i cm",
    },
    {
      name: "weigth",
      title: "Vekt",
      type: "number",
      description: "Vekt i gram",
    },
    {
      name: "year",
      title: "År",
      type: "number",
      description: "År",
    },
    {
      name: "exhibition",
      title: "Del av utstilling",
      type: "string",
      description: "Relevante utstillinger",
    },
    {
      name: "technique",
      title: "Teknikk",
      type: "string",
      description: "Teknikk",
    },
    {
      name: "describtion",
      title: "Beskrivelse",
      type: "text",
      description: "Beskrivelse av verket",
    },
    {
      name: "comment",
      title: "Kommentar",
      type: "text",
      description: "Kommentar til verket",
    },
    {
      name: "sound",
      title: "Lyd",
      type: "file",
      description: "Tilhørende lydfil",
    },
    {
      name: "rawImage",
      title: "Bilde raw",
      type: "image",
      description: "Råfil av bilde",
    },
    {
      name: "landscapeRawImage",
      title: "Landskap bilde raw",
      type: "image",
      description: "Råfil av bilde i landskap",
    },
    {
      name: "croppedImage",
      title: "Bilde Utskjært",
      type: "image",
      description: "Utskjært bilde",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
