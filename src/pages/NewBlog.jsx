import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";


import { Form, Formik } from "formik";
import useAuthApiCall from "../hooks/useAuthApiCall";
import NewBlogForm  from "../components/NewBlogForm";
import { Card, Paper } from "@mui/material";
import DrawIcon from '@mui/icons-material/Draw';
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";

const defaultTheme = createTheme();

const NewBlog = () => {
  const { postNewBlog, getCategory } = useBlogCall();

  useEffect(()=>{
    getCategory()
  },[])


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" 
      sx={{
        boxShadow: 10,
        marginBottom:"5rem"
      }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",

          }}
        >
          <Avatar sx={{ m: 1, bgcolor: " #1976D2",margin:"auto",marginTop:2 }}>
            <DrawIcon />
          </Avatar>
          <Typography component="h1" variant="h4" fontWeight="bolg">
            New Blog
          </Typography>
          <Box
           
            sx={{ mt: 3 }}
          >
            <Formik
              initialValues={{
                title: "",
                content: "",
                image: "",
                category: "",
                status: "",
                // slug: "",
                // id:""
              }}
              // validationSchema={}
              onSubmit={(values, actions) => {
                //TODO register(values)
                

                postNewBlog({...values});



                actions.resetForm();
                actions.setSubmitting(false);
              }}
              component={(props) => <NewBlogForm {...props} />}
            ></Formik>
            <Grid container justifyContent="flex-end" sx={{ mb: 2 }}>
             
            </Grid>

            
          </Box>
        </Box>


      </Container>
    </ThemeProvider>
  );
};
export default NewBlog;
