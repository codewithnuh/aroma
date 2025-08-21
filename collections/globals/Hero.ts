import { GlobalConfig } from "payload";
export const Hero: GlobalConfig = {
  slug: "hero",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      maxLength: 100,
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
      maxLength: 200,
    },
  ],
};
