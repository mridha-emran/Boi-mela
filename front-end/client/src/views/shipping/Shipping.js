import React, { Fragment, useState } from "react";
import "./shipping.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../redux/actions/cartAction";
import { useNavigate } from "react-router-dom";
const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => state.cart);
  const [address, setAddress] = useState();
  const [country,setCountry] = useState();
  const [city, setCity] = useState();
  const [phone, setPhone] = useState();

  const shippingSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingInfo({ address, city,phone,country })
    );
    navigate("/order/confirm");
  };

  return (
    <Fragment>
  
      <div className="shippingContainer">
        <div className="shippingBox">
          <h2 className="shippingHeading">Delivery Details</h2>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
              <div>
              <input
                type="text"
                placeholder="country"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                size="10"
              />
            </div>
            <input
              type="submit"
              value="Continue"
              className="shippingBtn"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;