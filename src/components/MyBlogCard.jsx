/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlined from "@mui/icons-material/ModeCommentOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import Face from "@mui/icons-material/Face";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { btnStyle } from "../style/globalStyle";

import { makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCall";
import { useNavigate } from "react-router-dom";
import MyBlogUpdateModal from "./MyBlogUpdateModal";
import MyBlogDeleteModal from "./MyBlogDeleteModal";
import { useState } from "react";








const useStyles = makeStyles((theme) => ({
  truncatedContent: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
}));



const MyBlogCard = ({
  myBlog,
  // handleOpenDelete,
  // handleOpenUpdate,
  // handleCloseDelete,
  // handleCloseUpdate,
  // setInfo,
  // openUpdate,
  // openDelete,
  // info,
}) => {
  const { postLike } = useBlogCall();

  const navigate = useNavigate();

  const [info, setInfo] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    status: "",
  });
  
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenUpdate = () => {setOpenUpdate(true)
  console.log("www");
  }
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseUpdate = () => {
    setOpenUpdate(false);
    setInfo({  title: "",
    content: "",
    image: "",
    category: "",
    status: ""});
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
    
  };

  const classes = useStyles();

  return (
    <Card
      variant="outlined"
      sx={{
        width: 400,
        // height: 450,
        // marginBottom:3,
        // maxHeigt: 300,
        "--Card-radius": (theme) => theme.vars.radius.xs,
        // alignItems:"center"
      }}
    >
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", gap: 1 }}
      >
        <Box
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: "-2px",
              borderRadius: "50%",
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            },
          }}
        >
          <Avatar
            size="sm"
            src="/static/logo.png"
            sx={{ p: 0.5, border: "2px solid", borderColor: "background.body" }}
          />
        </Box>
        <Typography fontWeight="lg">{myBlog?.author}</Typography>
      </CardContent>

      <CardOverflow>
        <Typography
          variant="h1"
          fontWeight="xl"
          align="center"
          color={"secondary.dark"}
          gutterBottom
        >
          {myBlog?.title}
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
            src={myBlog?.image}
            alt=""
            // loading="lazy"
            style={{
              objectFit: "cover", // veya "contain"
              // width: "100%",
              // height: "100%",
            }}
          />
        </AspectRatio>
      </CardOverflow>

      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", mx: -1 }}
      >
        <Box sx={{ width: 0, display: "flex", gap: 1.5 }}>
          <IconButton
            variant="plain"
            color="neutral"
            size="sm"
            onClick={() => postLike(blog?.id)}
          >
            <FavoriteBorder sx={btnStyle} />
            <Typography>{myBlog?.likes}</Typography>
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <ModeCommentOutlined sx={btnStyle} />
            <Typography>{myBlog?.comment_count}</Typography>
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <VisibilityIcon sx={btnStyle} />
            <Typography>{myBlog?.post_views}</Typography>
          </IconButton>
        </Box>

        <Box
          sx={{ width: 0, display: "flex", flexDirection: "row-reverse" }}
        ></Box>
      </CardContent>
      <CardContent>
        <Typography fontSize="sm">{myBlog?.content}</Typography>
        <Grid>

          <Button

            onClick={handleOpenUpdate}

            color="primary"
            variant="contained"
            sx={{ color: "text.tertiary", width: "50%", marginTop: 1 }}
          >
            UPDATE BLOG
          </Button>



          <Button
            onClick={handleOpenDelete}

            color="error"
            variant="contained"
            sx={{
              color: "text.tertiary",
              width: "40%",
              marginTop: 1,
              marginLeft: 2,
            }}
          >
            DELETE
          </Button>
        </Grid>

        <Link
          component="button"
          underline="none"
          fontSize="10px"
          sx={{ color: "text.tertiary", my: 0.5 }}
        >
          {myBlog?.publish_date.substring(0, 10) + " "}{" "}
          {myBlog?.publish_date.substring(11, 19)}
        </Link>
      </CardContent>
      <MyBlogUpdateModal
        myBlog={myBlog} 
        openUpdate={openUpdate}
        handleCloseUpdate={handleCloseUpdate}
        info={info}
        setInfo={setInfo}
        onClick={handleOpenUpdate}
      />
      <MyBlogDeleteModal
        myBlog={myBlog} 
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
        info={info}
        setInfo={setInfo}
        onClick={handleOpenDelete}
      />
    </Card>
  );
};

export default MyBlogCard;
