import axios from "axios";
import {LOGIN_FAIL,LOGIN_SUCCESS,LOGIN_REQUEST,
        REGISTER_FAIL,REGISTER_SUCCESS,REGISTER_USER_REQUEST,
        SINGLE_USER_FAIL,SINGLE_USER_SUCCESS,SINGLE_USER_REQUEST,
        LOGOUT_SUCCESS,PROFILE_UPDATE_FAIL, PROFILE_UPDATE_SUCCESS,  
        UPDATE_PASSWORD_SUCCESS,UPDATE_PASSWORD_FAIL,
        ALL_USERS_SUCCESS, ALL_USERS_FAIL,
        DELETE_USER_SUCCESS,DELETE_USER_FAIL,
    } from "../constants/userConstans"

export const login = (email, password) => async (dispatch) => {
  try { 
    dispatch({ type: LOGIN_REQUEST }); 
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
    // console.log ("this",userData)
  try {
    dispatch({ type: REGISTER_USER_REQUEST }); 
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
      // console.log(data)
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
  //  console.log("uac",name,email)
 
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

export const updatePassword = (passwords) => async (dispatch) => {
   console.log("update password")
  try {
    const { data } = await axios.put(
      `/api/user/password`,
      passwords,
    );
       console.log("update password" ,data)
    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/user`);

    dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
  }
};


export const deleteUser = (id) => async (dispatch) => {
  
  try {  
    const { data } = await axios.delete(`/api/user/${id}`);
    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};