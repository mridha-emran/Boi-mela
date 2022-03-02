import React, {useRef, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FaceIcon from '@mui/icons-material/Face';

const LoginRegister = () => {
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
  };

   const registerSubmit = (e) => {
    e.preventDefault();



  };

    const registerDataChange = (e) => {
   
      setUser({ ...user, [e.target.name]: e.target.value });
    
  };

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
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
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
                    required
                    name="name"
                    onChange={registerDataChange}
                  />
                </div>
                <div className="RegisterEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
            
                    onChange={registerDataChange}
                  />
                </div>
                <div className="RegisterPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"          
                    onChange={registerDataChange}
                  />
                </div>


                <input type="submit" value="Register" className="RegisterBtn" />
              </form>
            </div>
          </div>
        

  );
};

export default LoginRegister;