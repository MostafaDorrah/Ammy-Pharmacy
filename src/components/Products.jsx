import React from "react";
import Product from "./Product";
const Products = ({blogs}) => {
  return (
    <div className="p-5 flex flex-wrap">
      {blogs.map((product, index) => (
        <Product item={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
