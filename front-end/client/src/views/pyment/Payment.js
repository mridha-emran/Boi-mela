import React, { Fragment, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import { Typography } from "@material-ui/core";

import axios from "axios";
import "./payment.css";
import { createOrder} from "../../redux/actions/orderAction";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();
  const payBtn = useRef(null);
   const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  // const { user } = useSelector((state) => state.user);
  const[cardNumber, setCardNumber] = useState();
  const[cardExpiry, setCardExpiry] = useState();

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
   deliveryInfo: shippingInfo,
    bookItems: cartItems,
    bookPrice: orderInfo.subtotal,
    totalPrice: orderInfo.subtotal,
  };

  const submitHandler = async (e) => {
    console.log("good payment")
    e.preventDefault();
    
    payBtn.current.disabled = true;
    console.log(cardExpiry,cardNumber,payBtn)  
    try {
      const { data } = await axios.post(
        "/api/payment",{cardNumber,cardExpiry}
       
      );   
          console.log("payment",data.payment._id)
        if (data.status === "seccuse") {
          order.paymentInfo = {
            id: data.payment._id,
            status: data.status,
          };
            console.log("payment",order)
          dispatch(createOrder(order));

          navigate("/success");
        }   
    } catch (error) {
      payBtn.current.disabled = false;

    }
  };

  return (
    <Fragment>
   
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
             <div>
              <input
                 className="paymentInput"
                type="number"
                placeholder="card number"
                required
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            {/* <CardNumberElement className="paymentInput" /> */}
          </div>
          <div>
              <input
                 className="paymentInput"
                type="number"
                placeholder="card expiry"
                required
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
              />
           
          </div>

          <input
            type="submit"
            value={`Pay - ₹${orderInfo && orderInfo.subtotal}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;