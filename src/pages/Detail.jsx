import React from "react";
import { useParams } from "react-router-dom";
import DashCardDetail from "../components/DashCardDetail";
import { Grid } from "@mui/material";
import { Box } from "@mui/joy";
import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const { getCategory } = useBlogCall();

  useEffect(() => {
    getCategory();
  }, []);

  const { blog } = useSelector((state) => state.blog);

  const detailCard = blog?.data?.filter((item) => item.id == id);
  console.log(detailCard);
  console.log(detailCard[0]);

  return (
    <div>
      <Grid
        container
        justifyContent={"center"}
        spacing={3}
        marginTop={2}
        marginRight={1}
        marginBottom={10}
      >
        <Box
          // spacing={3}
          key={id}
          margin={1}
        >
          <DashCardDetail blog={detailCard[0]} />
        </Box>
      </Grid>
    </div>
  );
};

export default Detail;
