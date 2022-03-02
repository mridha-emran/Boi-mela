import React from "react";
import "./footer.css";
import logo from "../../images/sans-bg-logo.png"
const Footer = () => {
  return (
    <footer className="footer">
      

      <div className="container-footer">
         <img src={logo} alt="playstore" />
        <p>সকল ধরনের বাংলা বই পাবেন এখানে</p>
        <p>Copyrights 2022 &copy; MRIDHA</p>
      </div>

      
    </footer>
  );
};

export default Footer;