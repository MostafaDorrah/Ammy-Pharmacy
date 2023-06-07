import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const [hoverEffects, setHoverEffects] = useState(" opacity-0");
  const { id_user } = useParams();

  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#97DECE] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";

  function handleHoverEnter() {
    setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  }

  function handleHoverExit() {
    setHoverEffects(" opacity-0");
  }
  return (
    <div
      className="flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative max-w-[400px] max-h-[500px]"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img
        src={item.Photo}
        alt="product"
        className="max-w-[200px] max-h-[200px] "
      />
      <div
        className={
          `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
          hoverEffects
        }
      >
        <div className={iconStyle}>
          <Link to={`/ProductPage/${id_user}/${item.id}`}>
            <ShoppingCartOutlined />
          </Link>
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
