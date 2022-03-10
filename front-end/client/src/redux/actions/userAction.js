import axios from "axios";
import {LOGIN_FAIL,LOGIN_SUCCESS,
        REGISTER_FAIL,REGISTER_SUCCESS,
      SINGLE_USER_FAIL,SINGLE_USER_SUCCESS,LOGOUT_SUCCESS,
       PROFILE_UPDATE_FAIL, PROFILE_UPDATE_SUCCESS, PROFILE_UPDATE_RESET
    } from "../constants/userConstans"

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

export const singleUser = () => async (dispatch) => {
  try {
  
    const { data } = await axios.get(`/api/user/details`);
      console.log(data)
    dispatch({ type: SINGLE_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: SINGLE_USER_FAIL, payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
  
  }
};

export const profileUpdate = (name,email) => async (dispatch) => {
   console.log("uac",name,email)
 
  try {
    const { data } = await axios.put(`/api/user/details`, {name,email});

    dispatch({ type: PROFILE_UPDATE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: PROFILE_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};