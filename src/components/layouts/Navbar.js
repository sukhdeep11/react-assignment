import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography style={{ flex: 1 }}>Product Manger</Typography>
        <Button style={{ color: "white", textTransform: "capitalize" }}>
          LogOut
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
