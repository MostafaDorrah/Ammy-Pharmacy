import { React, useState } from "react";
import { useParams } from "react-router-dom";
import Seatch from "./Seatch";
const Orders = ({ id_user, search }) => {
  return (
    <div className="p-5 flex flex-wrap flex-col">
      {search
        .filter((search) => search.Customer_ID == id_user)
        .map((ord, index) => (
          <Seatch data={ord} key={index} />
        ))}
    </div>
  );
};

export default Orders;
