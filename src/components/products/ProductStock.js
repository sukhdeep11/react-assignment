import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

const ProductStock = props => {
  const style = {
    div: {
      border: "1px solid grey",
      borderRadius: "2px",
      marginTop: "7px"
    }
  };

  return (
    <div style={style.div}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Product Stock : {props.count.length}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ProductStock;
