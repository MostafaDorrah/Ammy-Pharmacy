import React from "react";
import Category from "./Category";
const Categories = ({ ApiCategories }) => {
  return (
    <div className="flex justify-between items-center p-5 mobile:flex-col">
      {ApiCategories.map((category, index) => (
        <Category item={category} key={index} />
      ))}
    </div>
  );
};

export default Categories;
