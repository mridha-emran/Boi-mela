import {LOGIN_FAIL,LOGIN_SUCCESS,
        REGISTER_FAIL,REGISTER_SUCCESS,
      SINGLE_USER_FAIL,SINGLE_USER_SUCCESS,LOGOUT_SUCCESS,
      PROFILE_UPDATE_FAIL, PROFILE_UPDATE_SUCCESS, PROFILE_UPDATE_RESET} from "../constants/userConstans"
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
export const singleUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case SINGLE_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case SINGLE_USER_FAIL:
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
export const logoutReducer = (state = { user: {} }, action) => {
  switch (action.type) {
   case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
        isAuthenticat: false,
      };

    default:
      return state;
  }
};
export const profileUpdateReducer = (state = {}, action) => {
  switch (action.type) {
   
    case PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case PROFILE_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PROFILE_UPDATE_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    default:
      return state;
  }
};