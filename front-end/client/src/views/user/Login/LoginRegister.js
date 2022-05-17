import React, {useRef, useState,useEffect } from "react";
import "./login.css";
import { Link,useNavigate } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Loader from "../../../component/Loader/Loader";
import FaceIcon from '@mui/icons-material/Face';
import { useDispatch, useSelector } from "react-redux";
import {  login, register } from "../../../redux/actions/userAction";

const LoginRegister = () => {

      const dispatch = useDispatch();
      const navigate = useNavigate();    
      const { isAuthenticat, error,loading} = useSelector((state) => state.login);
         console.log(error)
      const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });

      const [userImages, setuserImages] = useState("/Profile.png");
      const [focused, setFocused] = useState(false);
      const [loginEmail, setLoginEmail] = useState("");
      const [loginPassword, setLoginPassword] = useState(""); 
        
      const loginTab = useRef(null);
      const switcherTab = useRef(null);
      const registerTab = useRef(null);

    useEffect(() => {
           if (error) {
        alert( error);
    
      }
    if ( isAuthenticat ) {

        navigate("/user-profil");
      } 
  }, [dispatch ,isAuthenticat,error]);

          
    const switchTabs = (e, tab) => {

    if (tab === "login") {
      switcherTab.current.classList.remove("goToRight");
      registerTab.current.classList.remove("goToForm");
      loginTab.current.classList.remove("goToLeft");
    }
      if (tab === "register") {
      switcherTab.current.classList.add("goToRight");
      registerTab.current.classList.add("goToForm");
      loginTab.current.classList.add("goToLeft");
    }
    
  };

   const loginSubmit = (e) => { 
      e.preventDefault();
      dispatch(login(loginEmail, loginPassword));
  };

  const { name, email, password } = user;

  const registerSubmit = (e) => {
      e.preventDefault();
      const myForm = new FormData();

      myForm.set("name", name);
      myForm.set("email", email);
      myForm.set("password", password);
      myForm.set("userImages", userImages);
      dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "userImages") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setuserImages(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

 const handleFocus = (e) => {
            e.preventDefault() 
    setFocused(true)};  

  return (
          <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="LoginRegisterContainer">
            <div className="LoginRegisterBox">
              <div>
                <div className="login_Register_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>

              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <MailOutlineIcon />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                </div>
                <div className="loginPassword">
                  <LockOpenIcon />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                </div>
                <Link to="/password/forgot">Forget Password ?</Link>
                  <input type="submit" value="Login" className="loginBtn" />
              </form>

              <form
                className="RegisterForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="RegisterName">
                  <FaceIcon />
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={registerDataChange}
                      required
                    />
                </div>
                <div className="RegisterEmail">
                  <MailOutlineIcon />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={registerDataChange}
                      required
                    />
                </div>
                <div className="RegisterPassword">
                  <LockOpenIcon />
                    <input
                      className="RegisterPass"
                      type="password"
                      placeholder="Password"
                      name="password"
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      pattern= "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,20}$" 
                      value={password}          
                      onChange={registerDataChange}
                      required
                    />
                   <p className='required-massage'>"The password must be between 8 and 20 characters
                    and include at least one letter, 1 number and 1 special character!",</p>
                </div>
                <div id="registerImage">     
                    <input
                      type="file"
                      className="inputImage"
                      name="userImages"
                      accept="image/*"
                      onChange={registerDataChange}
                    />
                </div>
                  <input type="submit" value="Register" className="RegisterBtn" />
              </form>
            </div>
          </div>      
          </>
        )}
          </>
  );
};

export default LoginRegister;