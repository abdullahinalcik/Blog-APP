import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import useBlogCall from "../hooks/useBlogCall";
import { modalStyle } from "../style/globalStyle";
import { useSelector } from "react-redux";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect } from "react";

const MyBlogUpdateModal = ({
  myBlog,
  openUpdate,
  handleCloseUpdate,
  info,
  setInfo,
}) => {
  const {updateNewBlog}=useBlogCall()

  //   useEffect(() => {
  //  getCaregory()

  //   }, [])

  const { category } = useSelector((state) => state.blog);
  // console.log(category);
  const status = [
    { name: "Draft", id: "d" },
    { name: "Puplished", id: "p" },
  ];

  return (
    <Box
    // sx={modalStyle}
    >
      <Modal
        open={openUpdate}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Formik
          initialValues={{
            title: myBlog.title,
            content: myBlog.content,
            image: myBlog.image,
            category: myBlog.category, 
            status: myBlog.status, 
          }}
          // validationSchema={}
          onSubmit={(values, actions) => {
            //TODO register(values)

            updateNewBlog( myBlog.id,values);
            // console.log("qwe");
            // console.log(values);

            actions.resetForm();
            actions.setSubmitting(false);
            handleCloseUpdate();
          }}
          // component={(props) => <NewBlogForm {...props} />}
        >
          {({ handleChange, handleBlur, values }) => (
            <Box sx={modalStyle}>
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
                      value={values.title}
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
                          <MenuItem key={id} value={id}>
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
                    <TextField
                      size=""
                      fullWidth
                      required
                      id="content"
                      label="Content"
                      name="content"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.content}
                      multiline // Çok satırlı giriş alanını etkinleştirir
                      rows={4} // Satır sayısını belirler
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  UP DATE
                </Button>
              </Form>
            </Box>
          )}
        </Formik>
      </Modal>
    </Box>
  );
};

export default MyBlogUpdateModal;
