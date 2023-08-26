import axios from "axios";

import {
    toastErrorNotify,
    toastSuccessNotify,
    toastWarnNotify,
  } from "../helper/ToastNotify"

  import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchFail,fetchStart,getCategorySuccess,getBlogSuccess,postNewBlogSuccess } from "../features/blogSlice";
import { string } from "yup";


const useBlogCall = () => {

 const {token}=useSelector((state)=>state.auth)
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
      console.log(newBlogData);
      dispatch(fetchStart());
      try{ 
        console.log(typeof token);

        // const { data } = await axios.post(
        //   `${import.meta.env.VITE_BASE_URL}/api/blogs/`,newBlogData, {
        //     headers: { Authorization: `Token ${token}` },
        //   }      
        // );
         await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/blogs/`,
            newBlogData,    
          // {
          //   headers: { Authorization: `Token e251da2862347ad5c5b3c47ea984c21e3d5472ac` }
          // }
          {
            headers: { Authorization: `Token ${token}` }
          }
        );
        // dispatch(postNewBlogSuccess(data));
        getBlogList()
        toastSuccessNotify("New blog added")
        // console.log(data);
      } catch (error) {
        console.log(error);
        dispatch(fetchFail()); 
        toastWarnNotify("New blog can not added")
      }
  }

  const postLike=async (id)=>{
    dispatch(fetchStart());
            //  console.log(id);
    try{ 


          await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/likes/${id}/`,id,      
        {
          headers: { Authorization: `Token ${token}` }
        }
      );  
      getBlogList()
      // toastSuccessNotify("like")

    } catch (error) {

      dispatch(fetchFail()); 
      // toastWarnNotify("notlike")
    }

  }



  const postComments=async (id)=>{
    dispatch(fetchStart());
            //  console.log(id);
    try{ 


          await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/comments/${id}/`,id,      
        {
          headers: { Authorization: `Token ${token}` }
        }
      );  
      getBlogList()
      // toastSuccessNotify("like")

    } catch (error) {

      dispatch(fetchFail()); 
      // toastWarnNotify("notlike")
    }

  }


  return {getBlogList,getCategory,postNewBlog,postLike,postComments}
}

export default useBlogCall
