import { Search, ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { React, useState } from "react";
import Button from "@mui/material/Button";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useFetch from "../apifolder/useFetch";
import Input from "./Input";
import ListAltIcon from "@mui/icons-material/ListAlt";
function Navbar() {
  // const { data, isPending, error } = useFetch("http://localhost:8666/user_up");

  const { id_user } = useParams();
  const style = "text-[14px] cursor-pointer ml-[25px]";
  const [category, setCategory] = useState("");

  return (
    <div className="navbar h-[75px] shadow-md relative z-10 ">
      <div
        className="wrapper pl-[20px] pr-[20px] pt-[20px] pb-[20px] flex justify-between items-center"
        style={{ backgroundColor: "#439A97" }}
      >
        <div className="left flex flex-1 items-center mr-5">
          <div className="language cursor-pointer text-[16px] "></div>
          <div
            className="searchInput flex  rounded-md items-center ml-[10px] p-[5px]
           focus-within:border-[#62B6B7] transition-all "
          >
          </div>
        </div>
        <div className="center flex flex-1 ml-14">
          <div className="logo font-bold text-lg  ml-16">
            <Link to={`/Home/${id_user}`}>
              <h2>AMMY PHARMACY</h2>
            </Link>
          </div>
        </div>
        <div className=" right flex flex-1 items-center justify-end">
          <Link to={`/Register`}>
            <Button
              variant="contained"
              style={{
                color: "#ffffff",
                backgroundColor: "#97DECE",
                marginRight: "5px",
              }}
              size="small"
            >
              Sign Out
            </Button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
