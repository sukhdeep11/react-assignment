import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import validator from "validator";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errEmail: "",
    errPass: "",
    value: true
  };
  submitHandler = e => {
    e.preventDefault();
    this.props.history.push("/products");
  };

  validate = () => {
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({ value: false });
    }
  };
  onChangeEmail = e => {
    this.setState({ [e.target.name]: e.target.value });
    const { email } = this.state;

    if (validator.isEmail(email)) {
      this.setState({ errEmail: "" });
      this.validate();
    } else {
      this.setState({ errEmail: "Please! Enter valid Email" });
    }
  };
  onChangePass = e => {
    this.setState({ [e.target.name]: e.target.value });
    const { password } = this.state;

    var passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
    if (passPattern.test(password)) {
      this.setState({ errPass: "" });

      this.validate();
    } else {
      this.setState({
        errPass:
          "Password must be at least 6 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit "
      });
    }
  };
  render() {
    return (
      <Fragment>
        <div
          style={{
            width: "600px",
            border: "1px solid grey",
            borderRadius: "3px",
            position: "absolute",
            right: "30%",
            top: "25%"
          }}
        >
          <AppBar position="static">
            <Toolbar>
              <Typography>Login</Typography>
            </Toolbar>
          </AppBar>
          <div style={{ margin: "12px" }}>
            <form onSubmit={this.submitHandler}>
              <label htmlFor="text" required>
                Email
              </label>
              <TextField
                name="email"
                fullWidth
                variant="outlined"
                required
                placeholder="Enter Your Email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
              {
                (this,
                this.state.errEmail && (
                  <Typography style={{ color: "red" }}>
                    {this.state.errEmail}
                  </Typography>
                ))
              }
              <label htmlFor="text" required>
                Password
              </label>
              <TextField
                name="password"
                fullWidth
                type="password"
                id="name"
                variant="outlined"
                placeholder="Enter Your Password"
                required
                value={this.state.password}
                onChange={this.onChangePass}
              />
              {
                (this,
                this.state.errPass && (
                  <Typography style={{ color: "red" }}>
                    {this.state.errPass}
                  </Typography>
                ))
              }
              <br></br>
              <br></br>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                fullWidth
                disabled={false}
              >
                Log In
              </Button>
              <br></br>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Login);
