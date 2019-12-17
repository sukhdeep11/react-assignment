import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductStock from "./ProductStock";
import ProductDetail from "./ProductDetail";
import { Grid } from "@material-ui/core";

class Product extends Component {
  state = {
    list: [],

    product: {}
  };

  detailHandler = (name, price, rating, id) => {
    this.setState({
      list: [...this.state.list, { name, price, rating, id }]
    });
  };

  deleteHandler = filteredArray => {
    this.setState({
      list: filteredArray
    });
  };

  saveHandler = filteredArray => {
    this.setState({
      list: filteredArray
    });
  };

  handleListItemClick = product => {
    this.setState({ product: product });
  };
  render() {
    return (
      <div style={{ backgroundColor: "#f1f1f1" }}>
        <Grid container>
          <Grid item sm={4}>
            <ProductList
              list={this.state.list}
              product={this.state.product}
              handleListItemClick={this.handleListItemClick}
            ></ProductList>
          </Grid>
          <Grid item sm={8}>
            <ProductStock count={this.state.list}></ProductStock>
            <ProductDetail
              detailHandler={this.detailHandler}
              saveHandler={this.saveHandler}
              deleteHandler={this.deleteHandler}
              product={this.state.product}
              list={this.state.list}
            ></ProductDetail>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Product;
