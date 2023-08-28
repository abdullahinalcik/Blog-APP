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
      // console.log(newBlogData);
      dispatch(fetchStart());
      try{ 
        // console.log(typeof token);

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









  const updateNewBlog = async (id,updateBlogData) => {

    dispatch(fetchStart());
    try{ 
  console.log(id)
  console.log(updateBlogData)
       await axios.put(
        `${import.meta.env.VITE_BASE_URL}/api/blogs/${id}/`,
          updateBlogData,  

        {
          headers: { Authorization: `Token ${token}` }
        }
      );
      // dispatch(postNewBlogSuccess(data));
      getBlogList()
      toastSuccessNotify("The blog is updated sucessfuly")
      // console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail()); 
      toastWarnNotify("The blog can not be updated")
    }
}




































  const deleteBlog= async (id)=>{
    dispatch(fetchStart());
      try{ 
  // console.log(myBlog.id);
         await axios.delete(
          `${import.meta.env.VITE_BASE_URL}/api/blogs/${id}/`,
              
              {
            headers: { Authorization: `Token ${token}` }
          }
        );
        getBlogList()
        toastSuccessNotify("The blog deleted")

      } catch (error) {
        console.log(error);
        dispatch(fetchFail()); 
        toastWarnNotify("The blog can not deleted")
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



  const postComments=async (id,addComment)=>{
    dispatch(fetchStart());
            //  console.log(id);
    try{ 

      console.log(addComment);

          await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/comments/${id}/`,addComment,      
        {
          headers: { Authorization: `Token ${token}` }
        }
      );  

      getBlogList()
      toastSuccessNotify("Comment is added")

    } catch (error) {

      dispatch(fetchFail()); 
      toastWarnNotify("Comment  can not  added")
    }

  }


  return {getBlogList,getCategory,postNewBlog,postLike,postComments,deleteBlog,updateNewBlog}
}

export default useBlogCall
