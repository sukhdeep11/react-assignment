import React, { Component, Fragment } from "react";
import Navbar from "./components/layouts/Navbar";
import Product from "./components/products/Product";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/products">
            <Navbar></Navbar>
            <Product />
          </Route>
        </Fragment>
      </Router>
    );
  }
}

export default App;
