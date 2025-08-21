import { CollectionConfig } from "payload";
export const Products: CollectionConfig = {
  slug: "products",
  fields: [
    {
      name: "productName",
      type: "text",
      maxLength: 50,
      required: true,
    },
    {
      name: "productImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
  ],
};
