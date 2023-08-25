import * as React from 'react';

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';



import blog from "../../public/1.png";
import { Box, Grid } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { btnStyle } from '../style/globalStyle';


const About=()=> {


  return (
<Grid
 sx={{display:"flex",justifyContent:"center",padding:"2rem" }}
 >
<Card sx={{ 
    minWidth: 350,
     marginTop:"1rem",
     marginBottom:"5rem",
     boxShadow: 3,
     padding:"1rem"
      }} >

<CardMedia
  component="img"
//   height="300"
  image={blog}
  alt="Paella dish"
  sx={{borderRadius:"20px",
//    height:"10%",
   width:"60%",  
   m:"auto",
//    marginTop:"1rem"


  }}
/>
<CardContent>
  <Typography variant="h3"
  //  color="text.secondary"
    align='center'
    fontWeight={"bold"}
    >
  Blog APP
  </Typography>
</CardContent>
<CardContent>
  <Typography 
  //  color="text.secondary"
    align='center'
    // fontWeight={"bold"}
    >
  Designed by Abdullah Inalcik
  </Typography>
</CardContent>
<Box sx={{
    display:"flex",
    justifyContent:"center"
}} >
<IconButton href='https://www.linkedin.com/in/abdullah-inalcik/' target='_blank'  sx={btnStyle}>
    <LinkedInIcon />
  </IconButton>
  <IconButton href='https://github.com/abdullahinalcik' target='_blank'  sx={btnStyle} >
    <GitHubIcon />
  </IconButton>
</Box>

</Card>
</Grid>
  );
}
export default About