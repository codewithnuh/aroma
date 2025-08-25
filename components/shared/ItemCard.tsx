import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
type ItemPropsType = {
  new: boolean;
  imageSrc: string;
  itemName: string;
  price: number;
  alt: string;
};
export const products: ItemPropsType[] = [
  {
    new: true,
    imageSrc: "/coffee.avif",
    itemName: "Coffee",
    alt: "Coffee",
    price: 23,
  },
  {
    new: false,
    imageSrc: "/coffee.avif",
    itemName: "Coffee",
    alt: "Coffee",
    price: 23,
  },
  {
    new: false,
    imageSrc: "/coffee.avif",
    itemName: "Coffee",
    alt: "Coffee",
    price: 23,
  },
  {
    new: false,
    imageSrc: "/coffee.avif",
    itemName: "Coffee",
    alt: "Coffee",
    price: 23,
  },
];
const ItemCard = ({ item }: { item: ItemPropsType }) => {
  return (
    <div>
      <Card className="relative max-h-72 overflow-hidden rounded-3xl bg-primary">
        <CardHeader className="absolute top-2 -left-3 z-10">
          {item.new ? (
            <span className="w-10 rounded-md bg-secondary px-1 py-1 text-center font-body text-sm text-primary">
              New
            </span>
          ) : (
            ""
          )}
        </CardHeader>
        <CardContent className="relative top-10 flex items-center justify-center">
          <Image src={item.imageSrc} width={200} height={200} alt={item.alt} />
        </CardContent>
      </Card>
      <div className="mx-auto mt-4 flex max-w-[90%] items-center justify-between font-heading">
        <p className="font-heading text-2xl text-primary">{item.itemName}</p>
        <p className="text-primary">${item.price}</p>
      </div>
    </div>
  );
};
export default ItemCard;
