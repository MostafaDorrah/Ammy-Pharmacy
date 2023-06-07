import React from 'react'
import useFetch from "../apifolder/useFetch";
import Navbar from "../components/Navbar";

const My_navbar = () => {
    const {
      data: cat,
      isPending: cat_pen,
      error: cat_err,
    } = useFetch("http://127.0.0.1:8000/ALL_product");
  return (
    <div>
      {cat_err && <div>{cat_err}</div>}
      {cat_pen && <div>Loading...</div>}
      {cat && <Navbar ApiCategories={cat} />}
    </div>
  );
}

export default My_navbar