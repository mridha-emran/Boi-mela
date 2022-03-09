import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { booksReducer, singleBookReducer } from "./reducers/bookReducer";
import { loginReducer,registerReducer } from "./reducers/userReducer";

const reducer = combineReducers({
   books:booksReducer,
   singleBook:singleBookReducer,
   login:loginReducer,
   register:registerReducer
});

let initialState = {

};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;