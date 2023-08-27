import axios from "axios";

import {
    toastErrorNotify,
    toastSuccessNotify,
    toastWarnNotify,
  } from "../helper/ToastNotify"

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchFail,fetchStart,registerSuccess,loginSuccess,logoutSuccess } from "../features/authSlice";




const useAuthApiCall = () => {

const navigate=useNavigate()
const dispatch=useDispatch()





const login=async(userData)=>{
    dispatch(fetchStart())
    try {
        const {data}=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/auth/login/`,userData)
        dispatch(loginSuccess(data))
        toastSuccessNotify("Login Succes")
        navigate("/")
        console.log(userData);
    } catch (error) {
        dispatch(fetchFail())
        toastWarnNotify("Login failed")
    }
}

const register=async(userData)=>{
    dispatch(fetchStart())
    try {
        const {data}=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register/`,userData)
        dispatch(registerSuccess(data))
        toastSuccessNotify("Register Succes")
        navigate("/dashboard")
        console.log(userData);
    } catch (error) {
        dispatch(fetchFail())
        toastWarnNotify("Register failed")
    }
}

  const logout = async () => {

    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/auth/logout/`
      );
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout succes");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastWarnNotify("Logout failed");
    }
  };




  return { login, logout, register }; 
}

export default useAuthApiCall



