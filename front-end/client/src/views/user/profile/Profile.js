import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const { user,  isAuthenticat } = useSelector((state) => state.login);
     const navigate = useNavigate();
  useEffect(() => {
      console.log( isAuthenticat)
    if ( isAuthenticat === false ) {
       
      navigate("/login");
    }
  }, [navigate, isAuthenticat]);
   console.log("pro",user)
  return (
   
        <Fragment>
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
               <img src={user.userImages.url} alt={user.name} />
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
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
    
  );
};

export default Profile;