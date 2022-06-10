import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { addBooktReducer, booksReducer, newReviewReducer, singleBookReducer } from "./reducers/bookReducer";
import { loginReducer,registerReducer,profileUpdateReducer, allUsersReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { newOrderReducer,allOrdersReducer, orderReducer,orderDetailsReducer } from "./reducers/orderReducer";



const reducer = combineReducers({
   books:booksReducer,
   singleBook:singleBookReducer,
   login:loginReducer,
   register:registerReducer,
   
  //  logout:logoutReducer,
   updateProfile:profileUpdateReducer,
   cart:cartReducer,
   newOrder: newOrderReducer,
   allOrders: allOrdersReducer,
   allUsers: allUsersReducer,
   addBooks: addBooktReducer,
   order: orderReducer,
   orderDetails: orderDetailsReducer,
   newReview: newReviewReducer,
});
let initialState = {
     cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
       shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
    
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;