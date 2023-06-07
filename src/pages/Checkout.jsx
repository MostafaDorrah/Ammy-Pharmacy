import { React, useState, useEffect } from "react";
import useFetch from "../apifolder/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import Checkout1 from "./Checkout1";

function Checkout({ address_data }) {
  const { id_user } = useParams();

  const {
    data,
    isPending,
    error,
  } = useFetch("http://127.0.0.1:8000/Customer_return_visa/" + id_user);
  


  return (
    <div>
    {data && <Checkout1 address={address_data} visa={data} />}
     
    </div>
  );
}

export default Checkout;