import React, {useRef, useState,useEffect } from "react";
import "./login.css";
import { Link,useNavigate  } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FaceIcon from '@mui/icons-material/Face';
import { useDispatch, useSelector } from "react-redux";
import {  login, register } from "../../../redux/actions/userAction";

const LoginRegister = () => {

      const dispatch = useDispatch();

        const navigate = useNavigate();
      const { isAuthenticat } = useSelector(
        (state) => state.login
      );
      const { isAuthenticated } = useSelector(
        (state) => state.register
      );
      const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });

    const loginTab = useRef(null);
    const switcherTab = useRef(null);
     const registerTab = useRef(null);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
      
    useEffect(() => {
  
    if (isAuthenticated) {
      navigate("/user-profil");
    }
    if (isAuthenticat) {
      navigate("/user-profil");
    }
  }, [dispatch, isAuthenticated,isAuthenticat]);
    
      
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
    dispatch(register(user));

  };

    const registerDataChange = (e) => {
   
      setUser({ ...user, [e.target.name]: e.target.value });
    
  };
//  console.log("user",user)
  return (
  
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
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}          
                    onChange={registerDataChange}
                    required
                  />
                </div>


                <input type="submit" value="Register" className="RegisterBtn" />
              </form>
            </div>
          </div>
        

  );
};

export default LoginRegister;