import React, { Component, Fragment } from "react";
import "../.././App.css";
import {
  AppBar,
  Typography,
  Toolbar,
  List,
  ListItemText,
  ListItem
} from "@material-ui/core";

class ProductList extends Component {
  handleListItemClick = (product, index) => {
    this.props.handleListItemClick(product, index);
  };
  render() {
    const list = this.props.list;
    const style = {
      div: {
        border: "1px solid grey",
        borderRadius: "2px",
        marginRight: "7px",
        marginTop: "7px"
      }
    };

    return (
      <>
        <div style={style.div}>
          <AppBar position="static">
            <Toolbar>
              <Typography>Product List</Typography>
            </Toolbar>
          </AppBar>
          <div
            style={{
              height: "500px",
              backgroundColor: "white",
              overflow: "auto",
              margin: "7px",
              borderRadius: "2px",
              border: "1px solid grey"
            }}
          >
            {list && (
              <List style={{}}>
                {list.map(list => {
                  return (
                    <Fragment key={list.id}>
                      <ListItem
                        onClick={() => this.handleListItemClick(list)}
                        selected={list.id === this.props.product.id}
                        style={{
                          borderBottom: "1px solid grey"
                        }}
                      >
                        <ListItemText primary={`${list.name}`}></ListItemText>
                        <ListItem primary={`$ ${list.price}`}></ListItem>
                      </ListItem>
                    </Fragment>
                  );
                })}
              </List>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
