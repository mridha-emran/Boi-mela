import React, { Fragment, useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import {
  getOrderDetails,
  updateOrder,
} from "../../../../redux/actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_ORDER_RESET } from "../../../../redux/constants/orderConstants";
import "./updateOrder.css";
import { Button } from "@material-ui/core";
const UpdateOrder = () => {
  const { order } = useSelector((state) => state.orderDetails);
  const {  isUpdated } = useSelector((state) => state.order);
   const { id } = useParams();
  //  console.log( "test order",order)
  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);

    dispatch(updateOrder(id, myForm));
  };

  const dispatch = useDispatch();
  const [status, setStatus] = useState("");

  useEffect(() => {
  
    if (isUpdated) {
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(id));
  }, [dispatch,id, isUpdated]);

  return (
    <Fragment>

      <div className="dashboard">
            <div
              className="confirmOrderPage"

            >
              <div>
                <div className="confirmshippingArea">
                  <Typography>Shipping Info</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p>Name:</p>
                      <span>{order.user && order.user.name}</span>
                    </div>
                    <div>
                      <p>Phone:</p>
                      <span>
                        {order.deliveryInfo && order.deliveryInfo.phone}
                      </span>
                    </div>
                    <div>
                      <p>Address:</p>
                      <span>
                        {order.deliveryInfo &&
                          `${order.deliveryInfo.address}, ${order.deliveryInfo.city},, ${order.deliveryInfo.country}`}
                      </span>
                    </div>
                  </div>

                  <Typography>Payment</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p
                        className={
                          order.paymentInfo &&
                          order.paymentInfo.status === "seccuse"
                            ? "greenColor"
                            : "redColor"
                        }
                      >
                        {order.paymentInfo &&
                        order.paymentInfo.status === "seccuse"
                          ? "PAID"
                          : "NOT PAID"}
                      </p>
                    </div>

                    <div>
                      <p>Amount:</p>
                      <span>{order.totalPrice && order.totalPrice}</span>
                    </div>
                  </div>

                  <Typography>Order Status</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p
                        className=""
                        
                      >
                        {order.orderStatus && order.orderStatus}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="confirmCartItems">
                  <Typography>Your Cart Items:</Typography>
                  <div className="confirmCartItemsContainer">
                    {order.bookItems &&
                      order.bookItems.map((item) => (
                        <div key={item.product}>
                          {/* <img src={item.image} alt="Product" /> */}
                          <Link to={`/product/${item.book}`}>
                            {item.name}
                          </Link>{" "}
                          <span>
                            {item.quantity} X ₹{item.price} ={" "}
                            <b>₹{item.price * item.quantity}</b>
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/*  */}
              <div
                 style={{
                  display: order.orderStatus === "Shipped" ? "none" : "block",
                }}
              >
                <form
                  className="updateOrderForm"
                  onSubmit={updateOrderSubmitHandler}
                >
                  <h1>Process Order</h1>

                  <div>
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Choose Category</option>
                      {order.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )}
                    </select>
                  </div>
                     <Button
                    id="createProductBtn"
                    type="submit"
                  >
                    Process
                  </Button>
                </form>
              </div>
            </div>
      </div>
    </Fragment>
  );
};

export default UpdateOrder;