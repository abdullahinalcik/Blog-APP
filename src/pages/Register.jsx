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

import RegisterForm, { registerSchema } from "../components/RegisterForm";
import { Form, Formik } from "formik";
import useAuthApiCall from "../hooks/useAuthApiCall";

const defaultTheme = createTheme();

const Register = () => {
  const { register } = useAuthApiCall();


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

          }}
        >
          <Avatar sx={{ m: 1, bgcolor: " #1976D2" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            // component="form"
            // noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Formik
              initialValues={{
                username: "",
                email: "",
                image: "",
                bio: "",
                password: "",
              }}
              validationSchema={registerSchema}
              onSubmit={(values, actions) => {
                //TODO register(values)
                register({ ...values, password2: values.password });
                actions.resetForm();
                actions.setSubmitting(false);
              }}
              component={(props) => <RegisterForm {...props} />}
            ></Formik>
            <Grid container justifyContent="flex-end" sx={{ mb: 2 }}>
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>

            {/* //***********************İLK yapılan */}
            {/* <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Username"
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  autoFocus
                />
              </Grid>
          
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth id="image" label="Image" name="image" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth id="bio" label="Bio" name="bio" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid> */}
            {/* //***********************İLK yapılan */}
          </Box>
        </Box>

        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
};
export default Register;
