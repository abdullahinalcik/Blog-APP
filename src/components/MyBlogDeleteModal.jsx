import { Box, Typography } from "@mui/joy";
import { Button, Modal, TextField } from "@mui/material";
import { modalStyle } from "../style/globalStyle";
import useBlogCall from "../hooks/useBlogCall";

const MyBlogDeleteModal = ({ openDelete, handleCloseDelete, myBlog }) => {

  const{deleteBlog}=useBlogCall()
  return (
    <div>
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box component="form">
            <Typography sx={{ marginBottom: 2, fontSize: "1.3rem" }}>
              Do you really want to delete your blog?
            </Typography>

            <Box>
              <Button
                sx={{ width: "40%" }}
                color="success"
                variant="contained"
                onClick={handleCloseDelete}

                //  type="submit"
              >
                CANCEL
              </Button>
              <Button
                sx={{ width: "40%", marginLeft: 1 }}
                color="error"
                variant="contained"
                onClick={() => {
                  deleteBlog(myBlog.id);
                  console.log(myBlog.id);
                }}
              >
                DELETE
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default MyBlogDeleteModal;
