import React from "react";
import { Formik, Form } from "formik";
import { Button, Grid, TextField } from "@mui/material";
import { object, string } from "yup";
import { Link } from "react-router-dom";

export const registerSchema = object({
  username: string()
    .max(10, "Username must be less than 10 characters.")
    .required("Username is required."),
  email: string().email().required("Email is required."),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters.")
    .max(20, "Password must be less than 10 characters.")
    .matches(/\d+/, "Password must contain a number.")
    .matches(/[a-z]/, "Password must contain a lowercase letter.")
    .matches(/[A-Z]/, "Password must contain a uppercase letter.")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password must contain a special character"),
});

const RegisterForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <Form >
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          autoComplete="given-name"
          name="username"
          required
          fullWidth
          id="username"
          label="username"
          autoFocus
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          error={touched.username&&Boolean(errors.username)} 
          helperText={errors.username} 
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"

          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={touched.email&&Boolean(errors.email)} 
          helperText={errors.email} 
        />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth 
        id="image" 
        label="Image" 
        name="image" 
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.image}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth 
        id="bio" 
        label="Bio" 
        name="bio"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.bio}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
 
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={touched.password&&Boolean(errors.password)} 
          helperText={errors.password} 
        />
      </Grid>
    </Grid>
    <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
      
  </Form>
  );
};

export default RegisterForm;

