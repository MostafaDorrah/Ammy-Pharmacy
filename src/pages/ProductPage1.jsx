import { React, useState } from "react";
import { useParams } from "react-router-dom";
import ProductPage from "./ProductPage";
import useFetch from "../apifolder/useFetch";


const ProductPage1 = ({ orders }) => {
  const { id_comp } = useParams();
  const {
    data: pro,
    isPending,
    error,
  } = useFetch("http://127.0.0.1:8000/ALL_product");
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {pro && (
        <div>
          {pro
            .filter((order) => order.id == id_comp)
            .map((ord, index) => (
              <ProductPage pro={ord} key={index} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage1;
