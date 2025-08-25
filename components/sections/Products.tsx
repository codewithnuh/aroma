import React from "react";
import ItemCard, { products } from "../shared/ItemCard";

const Products = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="containerStyles">
        <div>
          <h2 className="text-primary">Loved By Locals</h2>
          <p className="tracking-tight text-primary">
            Local go's to everyone loves - handpicked and always fresh.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {products.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
