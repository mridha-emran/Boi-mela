
import React, { useState} from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../images/sans-bg-logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import './hearder.css';

const Header = () => {
   const [click, setClick] = useState(false);

    const handleClickIcon = () => {
        setClick(!click);
    };

  return (
    <header>
    <div className="nav_container">
                <div className="logo">
                    <NavLink exact to="/" >
                        <img src={logo} alt="" />
                    </NavLink>
                </div>

                <div className="nav_icon" onClick={handleClickIcon}>
                  {click ?  < MenuIcon /> : <CloseIcon />}
                </div>

                <ul className={click ? "nav_menu active" : "nav_menu"}>

                        <>
                            <li className="nav_item">
                                <NavLink exact to="/"  className="nav_links" onClick={handleClickIcon}>Home</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/allbook"  className="nav_links" onClick={handleClickIcon}>all books</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/Cart"  className="nav_links" onClick={handleClickIcon}>cart</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/contact"  className="nav_links" onClick={handleClickIcon}>contact</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/search"  className="nav_links" onClick={handleClickIcon}><SearchIcon /></NavLink>
                            </li>

                            <li className="nav_item">
                                <NavLink exact to="/login"  className="nav_links" onClick={handleClickIcon}><PersonIcon /></NavLink>
                            </li>
                                        
                        </>
                    
                </ul>
            </div>
        </header>
  );
};

export default Header;