import React, { useState, useContext } from "react";
import styles from "./navbar.module.css";
import { withRouter, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(authActions.logoutUser());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Material App
          </Typography>
          <Button color="inherit" onClick={logOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default withRouter(Navbar);
