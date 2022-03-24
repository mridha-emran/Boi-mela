import {LOGIN_FAIL,LOGIN_SUCCESS,
        REGISTER_FAIL,REGISTER_SUCCESS,
      SINGLE_USER_FAIL,SINGLE_USER_SUCCESS,LOGOUT_SUCCESS,
      PROFILE_UPDATE_FAIL, PROFILE_UPDATE_SUCCESS, PROFILE_UPDATE_RESET,
       UPDATE_PASSWORD_SUCCESS,UPDATE_PASSWORD_RESET,UPDATE_PASSWORD_FAIL
      ,ALL_USERS_SUCCESS,ALL_USERS_FAIL,
        DELETE_USER_SUCCESS,DELETE_USER_FAIL,DELETE_USER_RESET,} from "../constants/userConstans"
export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
      case SINGLE_USER_SUCCESS:  
      return {
        ...state,      
       isAuthenticat: true,
        user: action.payload,
      };

       case LOGOUT_SUCCESS:
      return {

        user: null,
        isAuthenticat: false,
      };

    case LOGIN_FAIL:
      case REGISTER_FAIL: 
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
export const registerReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      case REGISTER_FAIL:
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

export const profileUpdateReducer = (state = {}, action) => {
  switch (action.type) {
   
    case PROFILE_UPDATE_SUCCESS:
     case UPDATE_PASSWORD_SUCCESS:  
      return {
        ...state,
        isUpdated: action.payload,
      };

     case DELETE_USER_SUCCESS:
      return {
        ...state,
        isDeleted: action.payload.success,
        message: action.payload.message,
        
      };

    case PROFILE_UPDATE_FAIL:
    case UPDATE_PASSWORD_FAIL:
    case DELETE_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case PROFILE_UPDATE_RESET:
    case UPDATE_PASSWORD_RESET:
      return {
        ...state,
        isUpdated: false,
      };
     case DELETE_USER_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    default:
      return state;
  }
};

export const allUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {

    case ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    case ALL_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

