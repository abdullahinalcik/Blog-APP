import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { object, string } from "yup";
import { Link } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";


const status=[{name:"Draft",id:"d"},{name:"Puplished",id:"p"}]

const NewBlogForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {

const{category}=useSelector((state)=>state.blog)

// console.log(category);

  return (
    <Form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="title"
            required
            fullWidth
            id="title"
            label="Title"
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="image"
            label="Image URL"
            name="image"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="category">Category</InputLabel>
            <Select
             required
              placeholder="Category"
              labelId="category"
              id="category"
              name="category"
              value={values.category}
              label="category"
              onChange={handleChange}
              onBlur={handleBlur}
            //   sx={{ width: "100%" }}
            >
              {category?.map(({ id, name }) => (
                  <MenuItem key={id} value={name}>
                    {name}
                  </MenuItem>
                ))}
            </Select>

           
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              required
              labelId="status"
              id="status"
              name="status"
              value={values.status}
              label="status"
              onChange={handleChange}
              onBlur={handleBlur}
            //   sx={{ width: "100%" }}
            >
                {status?.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
            </Select>

           
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* <Field as="select" name="color"   >
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field> */}
          {/* <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={age}
              label="Age"
              sx={{ width: "100%" }}
              //   onChange={handleChange}
              onBlur={handleBlur}
            >
              <MenuItem value={10}>Ten</MenuItem>
            </Select>
          </FormControl> */}
        </Grid>

        <Grid item xs={12}>
          <TextField
            size=""
            fullWidth
            required
            id="content"
            label="Content"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.bio}
            multiline // Çok satırlı giriş alanını etkinleştirir
            rows={4} // Satır sayısını belirler
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add New Blog
      </Button>
    </Form>
  );
};

export default NewBlogForm;
