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
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCall";
import { useNavigate } from "react-router-dom";
import CommentList from "./CommentList";
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


const DashCardDetail=({blog})=> {
  const {postLike}=useBlogCall()

  const navigate=useNavigate()
  const [show,setShow]=useState(true)
  // console.log(show);

  // const handleClick=(id)=>{
  //         postLike(id)
  //         console.log(id)
  // }

  const classes = useStyles()
 
  return (
    <Card
      variant="outlined"
      sx={{

        width: 400,
        // height:400,
        // maxHeight: 300,
        "--Card-radius": (theme) => theme.vars.radius.xs
        // alignItems:"center"
      }}
    >
    

      <CardOverflow>
        
        <Typography 
        variant="h1"  
        align='center' 
        color={"secondary.dark"} 
        gutterBottom
        sx={{ 
          fontSize:"40px",
          fontWeight:"bold",
          marginTop:"1rem"
        }}
        >
          {blog?.title}
          </Typography>

        <AspectRatio 
        //  component={"image"}
        sx={{ 

              objectFit:'contain'
            }}
            >
          <img
           src={blog?.image}
            alt="" 
            style={{
              objectFit: "cover", 
        
            }}
           
          
            />
        </AspectRatio>

      </CardOverflow>

      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", gap: 1 }}
      >
        <Box
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: "-2px",
              borderRadius: "50%",
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
            }
          }}
        >
          <Avatar
            size="sm"
            src="/static/logo.png"
            sx={{ p: 0.5, border: "2px solid", borderColor: "background.body" }}
          />
        </Box>
        <Typography fontWeight="lg">
          {blog?.author}

          </Typography>
      </CardContent>
      
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", mx: -1 }}
      >


        <Box
          sx={{ width: 0, display: "flex", flexDirection: "row-reverse" }}
        ></Box>
      </CardContent>
      <CardContent>
        <Typography 
        // fontSize="sm"   
        // className={classes.truncatedContent}
        >
         {blog?.content}
        </Typography>
     
        <Typography
   
    
          fontSize="15px"
          sx={{ color: "text.tertiary", my: 0.5 }}
        >
        {blog?.publish_date.substring(0, 10)+" "} {blog?.publish_date.substring(11, 19)} 
        </Typography>
        <Box sx={{ width: 0, display: "flex", gap: 1.5 }}>
          <IconButton variant="plain" color="neutral" size="sm" onClick={()=>postLike(blog?.id)}>
            <FavoriteBorder sx={btnStyle} /> 
            <Typography>
            {blog?.likes}
            </Typography>
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm" onClick={()=>setShow(!show)} >
            <ModeCommentOutlined sx={btnStyle} /> 
            <Typography>
              {blog?.comment_count}
              </Typography>
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <VisibilityIcon sx={btnStyle}/>
             <Typography>
              {blog?.post_views}
             </Typography>
          </IconButton>
        </Box>
      </CardContent>
    
          {show && <CommentList blog={{blog}} />      }
    </Card>
  );
}

export default DashCardDetail