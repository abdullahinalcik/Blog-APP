import { Box, Card, Grid } from "@mui/material";
import React from "react";
import DashCard from "../components/DashCard";
import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";

const Dashboard = () => {


const {getBlogList}=useBlogCall()

useEffect(() => {
  getBlogList()


}, [])

const {blog}=useSelector((state)=>state.blog)

console.log(blog);
console.log(blog.data);
// console.log(blog.data[0].title);
// console.log(blog.data[1].title);
// console.log(blog.data[2].title);



  return (<Grid
     container 
     justifyContent={"center"} 
     spacing={3} 
     marginTop={2}
     marginRight={1}
     marginBottom={10}
     >

    {blog?.data?.map((item,i)=> <Box
      // spacing={3} 
      key={i}
       margin={1}
       ><DashCard blog={blog.data[i]} /></Box>)}
  

   
    </Grid>);
};

export default Dashboard;
