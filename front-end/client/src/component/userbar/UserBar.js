import React, {useState } from "react";
import "./userBar.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import logo from "../../images/book2-logo.jpg";
const UserBar = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
  const options = [

    { icon: <PersonIcon />, name: "Profile", func: account },
    
  ];

  function account() {
    navigate("/user-profil");
  } 

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="left"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={logo}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default UserBar;