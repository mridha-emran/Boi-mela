import React from "react";
import "./cartCard.css";
import { Link } from "react-router-dom";

const CartCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/book/${item.book}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={() => deleteCartItems(item.book)}>Remove</p>
      </div>
    </div>
  );
};

export default CartCard;