import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box
      position="fixed"
      bottom="0"
      sx={{
        width: "100%",
        // height: "auto",
        backgroundColor: " #1976D2",
        paddingTop: ".5rem",
        paddingBottom: ".5rem",
        marginBottom: "0",
        marginTop:"1"
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5" sx={{ color: "white" }}>
              Blog App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {/* <Typography color="textSecondary" variant="subtitle1" sx={{color: "white"}}>
              {`Developed by Abdullah inalcik ${new Date().getFullYear()} `}
            </Typography> */}
            <Typography variant="body2" color="white" align="center">
              Copyright ©
              <Link to="https://www.linkedin.com/in/abdullah-inalcik/" target="_blank" rel="noopener noreferrer">
                Abdullah
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
