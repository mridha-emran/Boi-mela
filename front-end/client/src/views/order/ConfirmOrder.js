import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./confirmOrder.css";
import { Link , useNavigate} from "react-router-dom";
import { Typography } from "@material-ui/core";

const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.login);
    const navigate = useNavigate();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

//   const shippingCharges = subtotal > 1000 ? 0 : 200;

//   const tax = subtotal * 0.18;

//   const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}`;

  const proceedToPayment = () => {
    console.log("proceess")
    const data = {
      subtotal,
    };
    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    navigate("/process/payment");
  };
  console.log("conf", user)
  return (
    <Fragment>
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phone}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div>
                    <Link to={`/book/${item.book}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X ₹{item.price} ={" "}
                      <b>₹{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
                 <div className="orderSummaryTotal">
                Total:
                    <span>
                     
                      <b>₹{subtotal}</b>
                    </span>
                  </div>
                 <div className="orderSummaryTotal">
                     <button >Proceed To Payment</button>
                  </div>


                     {/* <div className="">
        

            <div className="">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{subtotal}</span>
            </div>
            <button >Proceed To Payment</button>
          </div> */}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
        

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{subtotal}</span>
            </div>

            <button  onClick={proceedToPayment} >Proceed To Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;