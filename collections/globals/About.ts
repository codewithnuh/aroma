import { GlobalConfig } from "payload";

export const About: GlobalConfig = {
  slug: "about",
  fields: [
    {
      name: "headline",
      type: "text",
      required: true,
      maxLength: 100,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "features",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 4, // Limiting to four features as shown in the image
      labels: {
        singular: "Feature",
        plural: "Features",
      },
      fields: [
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "images",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 3, // Limiting to three images as shown in the image
      labels: {
        singular: "Image",
        plural: "Images",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
