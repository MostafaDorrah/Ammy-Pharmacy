import {React, useState, useEffect} from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import useFetch from '../apifolder/useFetch'
import axios from "axios";
import My_navbar from './My_navbar'

function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://127.0.0.1:8000/Top_10_product");

  const {
    data: cat,
    isPending: cat_pen,
    error: cat_err,
  } = useFetch("http://127.0.0.1:8000/Categories");

  return (
    <div>
      <Announce />
      <My_navbar />
      <Slider />
      {cat_err && <div>{cat_err}</div>}
      {cat_pen && <div>Loading...</div>}
      {cat && <Categories ApiCategories={cat} />}

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Products blogs={blogs} />}
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home