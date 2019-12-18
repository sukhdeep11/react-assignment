import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography style={{ flex: 1 }}>Product Manger</Typography>
        <Link to="/">
          <Button style={{ color: "white", textTransform: "capitalize" }}>
            LogOut
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
