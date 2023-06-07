import React from 'react'
import useFetch from "../apifolder/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import Checkout from "./Checkout";

function Check() {
    const { id_user } = useParams();
      const {
        data,
        isPending,
        error,
      } = useFetch("http://127.0.0.1:8000/Customer_return_address/" + id_user);

    

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <Checkout address_data={data} />}
   
    </div>
  );
}

export default Check
