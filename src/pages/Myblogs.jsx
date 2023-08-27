/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlined from "@mui/icons-material/ModeCommentOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import Face from "@mui/icons-material/Face";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { btnStyle } from '../style/globalStyle';

import { makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCall";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DashCard from "../components/DashCard";
// import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  truncatedContent: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
}));


const Myblog=()=> {

  const {getBlogList}=useBlogCall()

useEffect(() => {
  getBlogList()


}, [])
  
const {blog}=useSelector((state)=>state.blog)
console.log(blog);
const auth=useSelector((state)=>state.auth)
console.log(auth);

console.log(blog.data);
const myblog=blog.data.filter((item)=>item.author==auth?.currentUser)
console.log(myblog);

// const myblog="a"


const {postLike}=useBlogCall()

  const navigate=useNavigate()

  // const handleClick=(id)=>{
  //         postLike(id)
  //         console.log(id)
  // }

  const classes = useStyles()
 
  return (<Grid
    container 
    justifyContent={"center"} 
    spacing={3} 
    marginTop={2}
    marginRight={1}
    marginBottom={10}
    >

   {myblog.map((item,i)=> <Box
     // spacing={3} 
     key={i}
      margin={1}
      ><DashCard blog={myblog[i]} /></Box>)}
 

  
   </Grid>);
}

export default Myblog