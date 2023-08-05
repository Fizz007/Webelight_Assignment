// Order.js
import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
  const orders = useSelector((state) => state.order.orders);

  return (
    <div className="orders">
      <h2>Orders</h2>
      {orders.map((order) => (
        <div key={order.id}>
          <p>User ID: {order.userId}</p>
          <p>Amount: ${order.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Order;
