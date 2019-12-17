import React, { Fragment } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Select,
  MenuItem
} from "@material-ui/core";

const ProductRating = props => {
  const style = {
    div: {
      border: "1px solid grey",
      borderRadius: "2px",
      margin: "10px 0px"
    },
    select: {
      margin: "15px 20px",
      width: "95%"
    }
  };

  const ratingHandler = e => {
    props.ratingHandler(e.target.value);
  };

  return (
    <Fragment>
      <div style={style.div}>
        <AppBar position="static">
          <Toolbar>
            <Typography>Product Rating</Typography>
          </Toolbar>
        </AppBar>
        <Select
          value={props.rating}
          fullWidth
          style={style.select}
          onChange={ratingHandler}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </div>
    </Fragment>
  );
};

export default ProductRating;
