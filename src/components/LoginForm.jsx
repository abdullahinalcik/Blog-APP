import { Form } from 'formik'
import React from 'react'
import { Button, Grid, TextField } from "@mui/material";
import { object, string } from "yup";




export const loginSchema = object({

    email: string().email().required("Email is required."),
    password: string()
      .required("Password is required")      
  });


const LoginForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => {
  return (
    <Form> 
    <Grid container spacing={2}>              
           
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email&&Boolean(errors.email)} 
        helperText={errors.email} 
        
        // autoComplete="email"
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
        // autoComplete="new-password"
      />
    </Grid>
   
  </Grid>
  <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
  >
    Login
  </Button>
  </Form>
  )
}

export default LoginForm