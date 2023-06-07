import React from 'react'
import useFetch from "../apifolder/useFetch";
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';
import My_navbar from './My_navbar';
import { useParams } from "react-router-dom";
import Orders from "../components/Orders";

function Order_main() {
    const { id_user } = useParams();

      const { data, isPending, error } = useFetch(
        "http://127.0.0.1:8000/Customer_orders"
      );
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <My_navbar />
      <h1 className="ml-5 mt-5 font-bold">My Orders</h1>
      {data && <Orders orders={data} />}
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Order_main