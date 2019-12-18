import React, { Component, Fragment } from "react";
import ProductRating from "./ProductRating";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  TextField
} from "@material-ui/core";

class ProductDetail extends Component {
  state = {
    name: "",
    price: "",
    rating: "5",
    id: "",
    errName: "",
    errProduct: ""
  };

  //changeState
  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      this.setState({
        name: this.props.product.name,
        price: this.props.product.price,
        rating: this.props.product.rating,
        id: this.props.product.id
      });
    } else {
    }
  }

  // onChange
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //onblurName
  onBlurName = e => {
    if (this.state.name === "") {
      this.setState({
        errName: " Enter valid Name "
      });
    }
  };
  //onblurPrice
  onBlurPrice = e => {
    if (this.state.price === "") {
      this.setState({
        errPrice: " Enter valid Price "
      });
    }
  };

  //ratingHandler
  ratingHandler = rating => {
    this.setState({
      rating: rating
    });
  };

  //Add
  add = () => {
    //generating unique key
    const id =
      Math.random()
        .toString(36)
        .substring(2, 5) +
      Math.random()
        .toString(36)
        .substring(2, 5);
    const { name, price, rating } = this.state;

    if (this.state.name && this.state.price) {
      this.props.detailHandler(name, price, rating, id);
      this.setState({
        errName: "",
        errPrice: ""
      });
    }
    this.setState({
      name: "",
      price: "",
      rating: "5",
      id: ""
    });
  };

  //delete
  delete = () => {
    const id = this.state.id;
    const listArray = this.props.list;
    const filteredArray = listArray.filter(product => {
      return product.id !== id;
    });

    if (this.state.name && this.state.price) {
      this.props.deleteHandler(filteredArray);
      this.setState({
        errName: "",
        errPrice: ""
      });
    }
    this.setState({
      name: "",
      price: "",
      rating: "5",
      id: ""
    });
  };

  //save
  save = () => {
    const { name, price, rating, id } = this.state;
    const listArray = this.props.list;
    const filteredArray = listArray.filter(product => {
      if (product.id === id) {
        product.name = name;
        product.price = price;
        product.rating = rating;
      }
      return product;
    });
    this.props.saveHandler(filteredArray);
  };

  // cancel
  cancel = () => {
    this.setState({
      name: "",
      price: "",
      rating: "5",
      id: ""
    });
  };

  render() {
    const { name, price, rating } = this.state;

    const style = {
      form: {
        margin: "12px"
      },
      div: {
        border: "1px solid grey",
        borderRadius: "2px",
        margin: "7px 0px",
        backgroundColor: "white"
      }
    };
    return (
      <Fragment>
        <div style={style.div}>
          <AppBar position="static">
            <Toolbar>
              <Typography>Product Details</Typography>
              <Typography
                style={{ fontSize: "16", position: "absolute", right: "12px" }}
              >
                {this.state.id &&
                  `${this.state.name} (Product ID - ${this.state.id})`}
              </Typography>
            </Toolbar>
          </AppBar>
          <div style={{ margin: "8px" }}>
            <label htmlFor="text" required>
              Name
            </label>
            <TextField
              name="name"
              fullWidth
              id="name"
              variant="outlined"
              required
              value={name}
              onChange={this.onChange}
              onBlur={this.onBlurName}
            />
            {this.state.errName ? (
              <Typography style={{ color: "red" }}>
                {this.state.errName}
              </Typography>
            ) : (
              ""
            )}
            <label htmlFor="price">Price</label>
            <TextField
              name="price"
              fullWidth
              type="number"
              id="price"
              variant="outlined"
              required
              value={price}
              onChange={this.onChange}
              onBlur={this.onBlurPrice}
            />
            {this.state.errPrice ? (
              <Typography style={{ color: "red" }}>
                {this.state.errPrice}
              </Typography>
            ) : (
              ""
            )}
            <ProductRating
              rating={rating}
              ratingHandler={this.ratingHandler}
            ></ProductRating>
            <Button
              variant="contained"
              style={{ margin: "0 6px" }}
              color="primary"
              onClick={this.add}
            >
              Add
            </Button>
            <Button
              variant="contained"
              style={{ margin: "0 6px" }}
              color="secondary"
              onClick={this.save}
            >
              Save
            </Button>
            <Button
              variant="contained"
              style={{ margin: "0 6px", backgroundColor: "#2ecc71" }}
              onClick={this.delete}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              style={{ margin: "0 6px", backgroundColor: "" }}
              onClick={this.cancel}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductDetail;
