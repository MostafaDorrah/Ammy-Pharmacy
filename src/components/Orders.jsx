import { React, useState } from "react";
import { useParams } from "react-router-dom";
import Order from "./Order";
const Orders = ({ orders }) => {
  const { id_user } = useParams();
  return (
    <div className="p-5 flex flex-wrap flex-col">
      {orders
        .filter((order) => order.id_user == id_user)
        .map((ord, index) => (
          <Order item={ord} key={index} number={index+1} />
        ))}
    </div>
  );
};

export default Orders;
