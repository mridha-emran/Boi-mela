
import React,{ useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import SinglePage from '../views/book/singlePage';
import Cart from '../views/cart/Cart';
import Home from '../views/home/Home';
import Shipping from '../views/shipping/Shipping';
import LoginRegister from '../views/user/Login/LoginRegister';
import Profile from '../views/user/profile/Profile';
import UserUpdate from '../views/user/update/UserUpdate';
import{ AdminProtectedRoute,ProtectedRoute } from './ProtectedRoute';
import { singleUser } from "../redux/actions/userAction";
import store from "../redux/stors";
import { useSelector } from "react-redux";
import UserBar from '../component/userbar/UserBar';
import ConfirmOrder from '../views/order/ConfirmOrder';
import Payment from '../views/pyment/Payment';
import PaymentSucces from '../views/pyment/PaymentSucces';
import Dashboard from '../views/admin/dashboard/Dashboard';
import BookList from '../views/admin/booklist/Booklist';
import AddBook from '../views/admin/addBook/Addbook';
import OrderList from '../views/admin/orderlist/OrderList';
import UsersList from '../views/admin/userlist/UserList';
import AllBook from '../views/book/allBook/allBook';
import UpdateOrder from '../views/admin/orderlist/updateOrder/UpdateOrder';
import Contact from '../component/contact/Contact';
import UpdatePassword from '../views/user/updatePassword/UpdatePassword';
const MainPage = () => {
  const { user,  isAuthenticat } = useSelector((state) => state.login);
     useEffect(() => {
    store.dispatch(singleUser());
  }, []);
    return (
        <div>
            {isAuthenticat && < UserBar user={user} />}
          <Routes>
                 <Route exact path="/" element={<Home />} />
                 <Route exact path="/allbook" element={<AllBook />} />
                 <Route exact path="/book/:id" element={<SinglePage />} />
                 <Route exact path="/contact" element={<Contact />} />
                 <Route exact path="/login" element={<LoginRegister />} />


                  <Route exact path="/user-profil" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                  <Route exact path="/profile-update" element={<ProtectedRoute><UserUpdate/></ProtectedRoute>} />
                  <Route exact path="/password/update" element={<ProtectedRoute><UpdatePassword/></ProtectedRoute>} />
                  <Route exact path="/Cart" element={<Cart />} />
                  <Route exact path="/shipping"  element={<ProtectedRoute><Shipping /></ProtectedRoute>} /> 
                  <Route exact path="/order/confirm" element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />
                  <Route exact path="/process/payment"element={<ProtectedRoute><Payment /></ProtectedRoute>} />
                  <Route exact path="/success" element={<ProtectedRoute><PaymentSucces /></ProtectedRoute>} />
    

                   <Route exact path="/admin" element={<AdminProtectedRoute  isAdmin={true}><Dashboard /></AdminProtectedRoute>} />
                  <Route exact path="/admin/products"  element={<AdminProtectedRoute  isAdmin={true}><BookList /></AdminProtectedRoute>} />
                  <Route exact path="/admin/addBook"  element={<AdminProtectedRoute  isAdmin={true}><AddBook /></AdminProtectedRoute>}/>
                  <Route exact path="/admin/orders"  element={<AdminProtectedRoute  isAdmin={true}><OrderList /></AdminProtectedRoute>} />
                  <Route exact path="/admin/users" element={<AdminProtectedRoute  isAdmin={true}><UsersList /></AdminProtectedRoute>} />
                  <Route exact path="/admin/order/:id" element={<AdminProtectedRoute  isAdmin={true}><UpdateOrder /></AdminProtectedRoute>} />
                
          </Routes>       
        
        </div>
    )
}

export default MainPage
