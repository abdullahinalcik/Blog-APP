import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {  Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik } from 'formik';
import LoginForm ,{ loginSchema }from '../components/LoginForm';
import useAuthApiCall from '../hooks/useAuthApiCall';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Login=()=> {

  const{login}=useAuthApiCall()


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            marginBottom:8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: " #1976D2" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
          //  component="form"
            // noValidate 
            // onSubmit={handleSubmit} 
            sx={{ mt: 3 }}>
            <Formik
             initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
              onSubmit={(values, actions) => {
                //TODO register(values)
                login({...values });
                actions.resetForm();
                actions.setSubmitting(false);
              }}
              component={(props) => <LoginForm {...props} />}
            
            >

            </Formik>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/register" variant="body2">
                  Don't have an account? Register now
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
 
      </Container>
    </ThemeProvider>
  );
}
export default Login