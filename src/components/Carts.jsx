import {React, useState,useEffect} from 'react'
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate, useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import Cart_main from '../pages/Cart_main';
import { Link } from "react-router-dom";

function Carts({ item }) {
  const { id_user } = useParams(0);
  let id_user_ = parseInt(id_user, 10);
  const ProductDivStyle = "flex w-[100%] h-auto items-center mobile:flex-col";
  const PriceQuantityStyle =
    "flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7";
  const [counter, setCounter] = useState(item.Quantity);
  
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("error 1");
      let result = await fetch("http://127.0.0.1:8000/Update_Cart", {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Customer_ID: id_user_,
          Product_ID: item.Product_ID,
          Quantity: counter,
        }),
      });
      //   window.alert(result);
       console.log(result);
         
    } catch (e) {
      console.log(e);
    }
  window.location.reload();
    // navigate("/Cart/" + id_user);
  }

  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    // Counter state is decremented
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

    async function handleDelete(e) {
      e.preventDefault();

      try {
        console.log("error 1");
        let result = await fetch(
          `http://127.0.0.1:8000/Delete_from_cart/${item.Product_ID}/${id_user}`,
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          }
        );
        //   window.alert(result);
        // const data = await result.json();
        // // this.setRs(data.Value);
        // console.log(data.Value);
        // console.log(data.ID);
      } catch (e) {
        console.log(e);
      }
      window.location.reload();
      // navigate("/Cart/" + id_user);

    }

  
  return (
    <div>
      {/* product div */}
      <div className={ProductDivStyle}>
        <div className=" product flex pl-5 self-start">
          <img
            className="product_img w-[7rem]"
            src={item.Photo}
            alt="product_img"
          />

          <div className="disc flex items-start justify-between h-9 flex-col ml-5">
            {/* <p className="mb-3">
              <b className="mr-2">ID:</b>
              {item.Product_ID}
            </p> */}
            <p>
              <b className="mr-2">Product:</b>
              {item.Product_Name}
            </p>
          </div>
        </div>

        {/*Price and Quantity Div*/}
        <div className={PriceQuantityStyle}>
          <div className="counter flex items-center text-2xl justify-start">
            Quantity
            <div className="ml-5 shadow-md flex">
              <div className="bg-[#97DECE] text-white w-7 flex items-center justify-center rounded-l-lg cursor-pointer">
                <button onClick={handleClick2} className="mb-1">
                  <RemoveIcon size="small" />
                </button>
              </div>
              <div className="w-8 flex items-center justify-center border-[1px] border-[#97DECE]">
                {counter}
              </div>
              <div className="bg-[#97DECE] text-white w-7 flex items-center justify-center rounded-r-lg cursor-pointer">
                <button onClick={handleClick1} className="mb-1">
                  <AddIcon size="small" />
                </button>
              </div>
            </div>
          </div>
          <p className="flex items-center justify-center text-4xl mt-3">
            <b>{item.price} $</b>
          </p>
          <div className=" flex flex-row">
            <button
              onClick={handleSubmit}
              className="text-white bg-[#97DECE] rounded-md shadow-md mt-5 p-3 mr-2"
            >
              confirm
            </button>
            <button
              onClick={handleDelete}
              className="text-white bg-[#97DECE] rounded-md shadow-md mt-5 p-3"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <hr className="mb-7 mt-7 mobile:mt-0" />
    </div>
  );
}

export default Carts