import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const { user, isAuthenticated } = useSelector((state) => state.singleUser);
     const navigate = useNavigate();
  useEffect(() => {
      console.log(isAuthenticated)
    if (isAuthenticated === false ) {
       
      navigate("/login");
    }
  }, [isAuthenticated]);
   console.log("pro",user)
  return (
   
        <Fragment>
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <Link to="/profile-update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
             
              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
    
  );
};

export default Profile;