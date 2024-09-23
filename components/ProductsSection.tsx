import React from "react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";

const ProductsSection = async () => {
  const data = await fetch("http://ec2-3-79-230-202.eu-central-1.compute.amazonaws.com:3001/api/products");
  const products = await data.json();
  return (
    <div className="bg-slate-950 border-t-4 border-white">
      <div className="max-w-screen-2xl mx-auto pt-20">
        <Heading title="FEATURED PRODUCTS" />
        <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto py-10 gap-x-2 px-10 gap-y-8 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {products
            .slice()
            .sort(() => Math.random() - 0.5)
            .slice(0, 8)
            .map((product: Product) => (
              <ProductItem key={product.id} product={product} color="white" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
