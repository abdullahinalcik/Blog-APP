/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

import Box from "@mui/joy/Box";


import { makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCall";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MyBlogCard from "../components/MyBlogCard";
import MyBlogUpdateModal from "../components/MyBlogUpdateModal";
import MyBlogDeleteModal from "../components/MyBlogDeleteModal";
import { useState } from "react";
// import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  truncatedContent: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
}));

const MyBlog = () => {
  const { getBlogList,  getCategory } = useBlogCall();

  useEffect(() => {
    getBlogList();
    getCategory();
    
  }, []);

  const { blog } = useSelector((state) => state.blog);
  // console.log(blog);
  const auth = useSelector((state) => state.auth);
  // console.log(auth);

  // console.log(blog.data);
  const myblog = blog.data.filter((item) => item.author == auth?.currentUser);
  // console.log(myblog);

  // const myblog="a"

  const { postLike } = useBlogCall();

  const navigate = useNavigate();

  // const handleClick=(id)=>{
  //         postLike(id)
  //         console.log(id)
  // }

  const classes = useStyles();

  const [info, setInfo] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    status: "",
  });

  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseUpdate = () => {
    setOpenUpdate(false);
    setInfo({ name: "", phone: "", address: "", image: "" });
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
    
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      spacing={3}
      marginTop={2}
      marginRight={1}
      marginLeft={1}
      marginBottom={10}
    >
      {myblog.map((item, i) => (
        <Box
          // spacing={3}
          key={i}
          margin={1}
        >
          <MyBlogCard 
        myBlog={myblog[i]} 
        handleCloseUpdate={handleCloseUpdate}
        handleCloseDelete={handleCloseDelete}
        openDelete={openDelete}
        openUpdate={openUpdate}
        info={info}
        setInfo={setInfo}
        onClick={handleOpenUpdate}/>
        </Box>
      ))}
{/* 
      <MyBlogUpdateModal
        myBlog={myblog} 
        openUpdate={openUpdate}
        handleCloseUpdate={handleCloseUpdate}
        info={info}
        setInfo={setInfo}
        onClick={handleOpenUpdate}
      />
      <MyBlogDeleteModal
        myBlog={myblog} 
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
        info={info}
        setInfo={setInfo}
        onClick={handleOpenDelete}
      /> */}
    </Grid>
  );
};

export default MyBlog;
