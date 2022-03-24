import React from "react";
import "./payment.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const PaymentSucces = () => {
  return (
    <div className="orderSuccess">
      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default PaymentSucces;