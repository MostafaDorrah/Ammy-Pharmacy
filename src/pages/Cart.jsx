import {React, useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Carts from "../components/Carts";
import My_navbar from "./My_navbar";
import { useNavigate, useParams } from "react-router-dom";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";
const Cart = ({ apiCart }) => {
  const navigate = useNavigate();
  const { id_user} = useParams();

  const [sum, setsum] = useState(0);
  useEffect(() => {
    let sum = 0;
    apiCart.forEach((item) => {
      if (item.Quantity == undefined) {
        item.Quantity = 1;
      }
      if (item.price == undefined) {
        item.price = 0;
      }
      sum += item.price * item.Quantity;
    });
    setsum(sum);
  }, [apiCart]);

  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);


  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
  return (
    <div>
      <My_navbar />
      <div className="p-3">
        <div className="flex justify-center text-5xl">Cart</div>

        {/* upper buttons div */}
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button
            onClick={() => {
              navigate("/Home/" + id_user);
            }}
            className="btn bg-white text-[#8a4af3] border-2 border-[#97DECE] mt-0"
          >
            Continue Shopping
          </button>
          <Link to={`/Checkout1/${id_user}/${sum}`}>
            <button className="btn mt-0">Checkout Now</button>
          </Link>
        </div>

        {/* vertically center parent div */}
        <div className="flex flex-row mt-7 mobile:flex-col">
          {/* product div */}
          <div className="flex flex-col flex-1">
            {/* product div */}
            {apiCart.map(
              (cartProduct, index) => ( 
                (<Carts item={cartProduct} key={index} />)
              )
            )}
          </div>
          <div className="Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6">
            <h1 className="text-[2rem]">SUMMARY</h1>
            <div className={SummaryItemStyle}>
              <p>SubTotal:</p>
              <p>{sum} $</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping:</p>
              <p>$10</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping Discount:</p>
              <p>-$10</p>
            </div>
            <div className={SummaryItemStyle + " text-3xl font-bold"}>
              <p>Total:</p>
              <p>{sum} $</p>
            </div>
          </div>
        </div>
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default Cart;

