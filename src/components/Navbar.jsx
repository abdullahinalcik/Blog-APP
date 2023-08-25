import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import blog from "../../public/1.png";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify } from "../helper/ToastNotify";
import  {useState}  from "react";
import { useDispatch, useSelector } from "react-redux";

import useAuthApiCall from "../hooks/useAuthApiCall";

const pages = ["Dashboard", "New Blog", "About"];
const settings = ["My Blogs", "Profile"];



function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {currentUser }= useSelector((state)=>state.auth)

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const{logout}=useAuthApiCall()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleClick = (pages) => {
    navigate(`/${pages.toLowerCase().replace(" ", "")}`)
    console.log(`/${pages.toLowerCase().replace(" ", "")}`);
  };

  const handleLogout=()=>{
    // toastSuccessNotify("Logout succes")
    logout()
    setCurrentUser(false)
    console.log();
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            sx={{
              width: "100px",
              display: { xs: "none", md: "flex" },
              mr: 1,
              ml: 1,
            }}
          >
            <img src={blog} width={60} />
          </IconButton>
          {/* <img src={blog}  sx={{ with:"10px", display: { xs: 'none', md: 'flex' }  }}/> */}
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO2
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>handleClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <img src={blog} alt="PNG Icon" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
            <img src={blog} width={60} />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Blog App
          </Typography>



          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleClick(page)}
                sx={{ my: 2, color: "white", display: "block" }}
               

              >
                {page}
              </Button>
            ))}
          </Box>




          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="A" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser ? (
                settings.map((setting) => (
                  <MenuItem key={setting} onClick={()=>handleClick(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))
                
              ) : (
                <MenuItem onClick={()=>navigate("/login")}>
                  <Typography textAlign="center">Log in</Typography>
                </MenuItem>
              )}
               {currentUser && (
                <MenuItem onClick={ handleLogout}>
                  <Typography textAlign="center" >Logout</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
