/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { useSelector } from "react-redux";

// import clsx from "clsx";

const Profile = () => {


  const auth=useSelector((state)=>state.auth)
  console.log(auth);


  return (
    <Card
      variant="outlined"
      sx={{
        width: 350,
        // height: 400,
        m:"auto",
        marginTop:2,
        marginBottom:10,
        // maxHeight: 300,
        "--Card-radius": (theme) => theme.vars.radius.xs,
        // alignItems:"center"
      }}
    >


      <CardOverflow>
        <Typography
          variant="h1"
          fontWeight="xl"
          fontSize="2rem"
          align="center"
          color={"secondary.dark"}
          gutterBottom
        >
          Profile
        </Typography>

        <AspectRatio
          //  component={"image"}
          sx={{
            // p:1,
            // height: 0,
            // maxWidth : "100%",
            objectFit: "contain",
          }}
        >
          <img
            src={auth?.image}
            alt={auth?.currentUser}
            // loading="lazy"
            style={{
              objectFit: "cover", // veya "contain"
              // width: "100%",
              // height: "100%",
            }}
          />
        </AspectRatio>
      </CardOverflow>
      

      <CardContent  >

        <Typography textAlign={"center"} fontSize="1.3rem" fontWeight={"bold"}>{auth?.currentUser}</Typography>
        <Typography fontSize="1rem" textAlign={"center"}>{auth?.email}</Typography>

        <Typography fontSize="10px" sx={{ color: "text.tertiary", my: 0.5 }}>
          {/* {auth?.publish_date.substring(0, 10) + " "}{" "}
          {auth?.publish_date.substring(11, 19)} */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;
