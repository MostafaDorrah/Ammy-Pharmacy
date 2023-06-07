import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products2 from "../components/Products2";
import useFetch from "../apifolder/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import My_navbar from "./My_navbar";
const CategoryPage = () => {
  const { categor } = useParams();
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://127.0.0.1:8000/category_product/" + categor);
  // useFetch("http://127.0.0.1:8000/category_product/" + categor);
  return (
    <div>
      <Announce />
      <My_navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">{categor}</h1>
      </div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Products2 ApiTopPropduct={blogs} />}
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
