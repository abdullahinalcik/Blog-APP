import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Grid, TextField } from '@mui/material';
import useBlogCall from '../hooks/useBlogCall';
import { useState } from 'react';

const CommentList=({blog})=> {
  const {postComments}=useBlogCall()
  const [addComment,setAddComment]=useState({
    "content":"","post":1
  })
  // const [content,setContent]=useState()
  const handleChange=(e)=>{
    // setContent(e.target.value)
    setAddComment({...addComment,content:e.target.value})
   
  }

  console.log(addComment);
// console.log(blog.blog.comments);
console.log(blog.blog.id);
const comments=blog.blog.comments

console.log(comments);
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     {comments?.map((item)=> 
        <>
         <Divider variant="inset" component="li" />
         <ListItem alignItems="flex-start">
         <ListItemAvatar >
           <Avatar alt={item.user} src="{item.user}" sx={{backgroundColor:"purple"}}/>
         </ListItemAvatar>
         <ListItemText
           primary={item.user}
           secondary={
             <React.Fragment>
               <Typography
                //  sx={{ display: 'inline' }}
                //  component="span"
                //  variant="body2"
                 color="text.primary"
               >
               {item.content}
                 {/* Ali Connors */}
               </Typography>
                <Typography  fontSize="12px"  >
                {item?.time_stamp.substring(0, 10)+" "} {item?.time_stamp.substring(11, 19)} 
                </Typography>


             </React.Fragment>
           }
         />
         
       </ListItem>
      
        
        </>
       
      )}
        <Grid item xs={12}>
          <TextField
            size="100%"
            fullWidth
            required
            id="comment"
            label="Comments"
            name="comment"
            onChange={handleChange}
            multiline 
            rows={4} 
          />
        </Grid>
        <Button
         variant="contained"
         sx={{marginTop:1}}
         onClick={()=>{
          postComments(blog.blog.id,addComment)
          
         }}
         >ADD COMMENT</Button>

    </List>
  );
}
export default CommentList