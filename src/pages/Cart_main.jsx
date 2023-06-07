import {React, useState, useEffect} from 'react'
import useFetch from "../apifolder/useFetch";
import Cart from './Cart';
import { useNavigate, useParams } from "react-router-dom";

function Cart_main() {

const { id_user } = useParams();
  const [blog,setBlog] = useState([]);
    const {
      data: blogs,
      isPending,
      error,
    } = useFetch("http://127.0.0.1:8000/View_cart/" + id_user);

    // blogs && setBlog(blogs)
    
    // useEffect(() => {},[blog])
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Cart apiCart={blogs}  />}
    </div>
  );
}

export default Cart_main