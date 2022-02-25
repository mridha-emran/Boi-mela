
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../views/home/Home';

const MainPage = () => {
    return (
        <div>
          <Routes>
                 <Route exact path="/" element={<Home />} />
                
          </Routes>

         
                
        
        </div>
    )
}

export default MainPage
