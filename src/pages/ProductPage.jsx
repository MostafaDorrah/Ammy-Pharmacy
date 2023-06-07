import { React, useState } from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../apifolder/useFetch";
import My_navbar from "./My_navbar";


const ProductPage = ({pro}) => {
  const navigate = useNavigate();
  const { id_comp, id_user } = useParams();
  let id_user_ = parseInt(id_user, 10);
  let id_comp_ = parseInt(id_comp, 10);
  const [todoList, setTodoList] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log({
      Customer_ID: id_user_,
      Product_ID: pro.Product_ID,
      Quantity: counter,
    });

    try {
      console.log("error 1");
      let result = await fetch("http://127.0.0.1:8000/add_to_cart", {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Customer_ID: id_user_,
          Product_ID: id_comp_,
          Quantity: counter,
        }),
      });
      const data = await result.json();
      if (data.Value == "True") {
        navigate("/Home/" + id_user);
        
      } else {
        window.alert(data.Value);
      }
      //   window.alert(result);
    } catch (e) {
      console.log(e);
    }
  }


  const [counter, setCounter] = useState(0);
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
  return (
    <div>
      <Announce />
      <My_navbar />
      <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={pro.Photo}
            className="max-w-[300px] max-h-[300px] "
            alt="product_image"
          />
        </div>
        <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">{pro.Title}</h1>
          <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
            {pro.Description}
          </p>
          <div className="flex flex-col place-self-start">
            <p className="mt-7 text-3xl">
              Price: <b>{pro.Price}$</b>
            </p>
            <p className="mt-7 text-3xl">
              Active Ingridiant: <b>{pro.Active_Ingridiant}</b>
            </p>
            <div className="mt-7">
              <div>
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
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="text-white bg-[#97DECE] rounded-md shadow-md mt-[30px] p-3"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductPage;
