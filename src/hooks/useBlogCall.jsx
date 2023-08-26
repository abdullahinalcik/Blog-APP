import axios from "axios";

import {
    toastErrorNotify,
    toastSuccessNotify,
    toastWarnNotify,
  } from "../helper/ToastNotify"

  import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchFail,fetchStart,getCategorySuccess,getBlogSuccess,postNewBlogSuccess } from "../features/blogSlice";


const useBlogCall = () => {


  const dispatch = useDispatch();

  const getBlogList = async () => {
    dispatch(fetchStart()); 

    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/api/blogs/`
        // ,
        // {
        //   headers: { Authorization: `Token ${token}` },
        // }
      );
      
      dispatch(getBlogSuccess({ data}));
      // console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail()); 
    }
  };

  const getCategory = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/api/categories/`
       
      );
      dispatch(getCategorySuccess(data));
    
      // console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail()); 
    }
  }

    const postNewBlog = async (newBlogData) => {
      dispatch(fetchStart());
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/blogs/`,newBlogData      
        );
        dispatch(postNewBlogSuccess(data));
        getCategory()
        toastSuccessNotify("New blog added")
        console.log(data);
      } catch (error) {
        console.log(error);
        dispatch(fetchFail()); 
        toastWarnNotify("New blog can not added")
      }
  }


  return {getBlogList,getCategory,postNewBlog}
}

export default useBlogCall
