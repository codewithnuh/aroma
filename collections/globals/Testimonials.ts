import { GlobalConfig } from "payload";

const Testimonials: GlobalConfig = {
  slug: "testimonials",
  fields: [
    {
      name: "headline",
      type: "text",
      required: true,
      maxLength: 100,
      label: "Section Headline",
    },
    {
      name: "reviews",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 3, // Limiting to 3 reviews as shown in the image
      labels: {
        singular: "Review",
        plural: "Reviews",
      },
      fields: [
        {
          name: "quote",
          type: "textarea",
          required: true,
        },
        {
          name: "author",
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
      maxRows: 3, // Limiting to 3 images as shown in the image
      labels: {
        singular: "Image",
        plural: "Images",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media", // Assuming you have a 'media' collection for uploads
          required: true,
        },
      ],
    },
  ],
};

export default Testimonials;
