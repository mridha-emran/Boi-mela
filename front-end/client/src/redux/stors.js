import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { booksReducer, singleBookReducer } from "./reducers/bookReducer";

const reducer = combineReducers({
   books:booksReducer,
   singleBook:singleBookReducer,
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