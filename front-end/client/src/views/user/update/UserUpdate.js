import React, { useState,useEffect } from "react";
import "./userUpdate.css";
import FaceIcon from '@mui/icons-material/Face';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profileUpdate,singleUser } from "../../../redux/actions/userAction";
import { PROFILE_UPDATE_RESET } from "../../../redux/constants/userConstans";

const UserUpdate = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.singleUser);
    const {  isUpdated } = useSelector((state) => state.updateProfile);
        const navigate = useNavigate();
      const [name, setName] = useState(""); 
      const [email, setEmail] = useState("");
     
  const updateProfileSubmit = (e) => {
    e.preventDefault();
    dispatch(profileUpdate(name,email));
  };
   
   useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }

     if (isUpdated) {
      dispatch(singleUser());
      navigate("/user-profil");

      dispatch({
        type: PROFILE_UPDATE_RESET,
      });
    }
  }, [dispatch,user, isUpdated]);
    
 console.log("na",name)
 console.log("ea",email)
  return (          
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Update Profile</h2>

              <form
                className="updateProfileForm"
                  encType="multipart/form-data"
                  onSubmit={updateProfileSubmit}
              >
                <div className="updateProfileName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                     value={name}
                    onChange={(e) => setName(e.target.value)}

                  />
                </div>
                <div className="updateProfileEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Update"
                  className="updateProfileBtn"
                />
              </form>
            </div>
          </div>
   
  );
};

export default UserUpdate;