import {LOGIN_FAIL,LOGIN_SUCCESS,
        REGISTER_FAIL,REGISTER_SUCCESS} from "../constants/userConstans"
export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,      
       isAuthenticat: true,
        user: action.payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticat: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const registerReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    default:
      return state;
  }
};