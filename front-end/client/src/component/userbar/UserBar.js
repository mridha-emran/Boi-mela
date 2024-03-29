import React, {useState } from "react";
import "./userBar.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useNavigate } from "react-router-dom";
import logo from "../../images/book2-logo.jpg";
import { logout } from "../../redux/actions/userAction";
import { useDispatch} from "react-redux";
const UserBar = ({ user }) => {

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
    const options = [
    { icon: <LocalMallIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: profile },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];
    if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    navigate("/admin");
  }



  function orders() {
    navigate("/Cart");
  }
  function profile() {
    navigate("/user-profil");
  }
  
  function logoutUser() {
    dispatch(logout());
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
            src={user.userImages.url}
            alt={user.name}
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