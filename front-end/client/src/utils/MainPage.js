
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import SinglePage from '../views/book/singlePage';
import Home from '../views/home/Home';
import LoginRegister from '../views/user/Login/LoginRegister';
import Profile from '../views/user/profile/Profile';
import UserUpdate from '../views/user/update/UserUpdate';


const MainPage = () => {
    return (
        <div>
          <Routes>
                 <Route exact path="/" element={<Home />} />
                 <Route exact path="/book/:id" element={<SinglePage />} />
                 <Route exact path="/login" element={<LoginRegister />} />
                 <Route exact path="/user-profil" element={<Profile />} />
                  <Route exact path="/profile-update" element={<UserUpdate />} />
                
                
          </Routes>

         
                
        
        </div>
    )
}

export default MainPage
