import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const Category = ({ item }) => {
  const { id_user } = useParams();
  return (
    <div>
      <div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative">
        <img src={item.src} className="w-[100%]" alt="category_img" />
        <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
          <h2 className="text-white font-medium text-[30px]">{item.title}</h2>
          <Link to={`/CategoryPage/${id_user}/${item.categ}`}>
            <Button
              variant="contained"
              style={{
                color: "#fffff",
                backgroundColor: "#97DECE",
                marginRight: "5px",
                marginTop: "10px",
              }}
            >
              See more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
