import axios from "axios";
import {LOGIN_FAIL,LOGIN_SUCCESS,
        REGISTER_FAIL,REGISTER_SUCCESS} from "../constants/userConstans"


// Login
export const login = (email, password) => async (dispatch) => {
  try {  
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/login`,
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Register
export const register = (userData) => async (dispatch) => {
    console.log ("this",userData)
  try {
   
    const { data } = await axios.post(`/api/register`, userData);

    dispatch({ type: REGISTER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.message,
    });
  }
};
