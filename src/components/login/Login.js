import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class Login extends Component {
  state = {
    emailError: "",
    passwordError: "",
    invalid: true
  };
  validateEmail = e => {
    if (!e.target.value.includes("@") || !e.target.value.includes(".")) {
      let emailError = "Invalid email";
      this.setState({ emailError, invalid: true });
    } else {
      this.setState({ emailError: "", email: e.target.value }, () =>
        this.validate()
      );
    }
  };
  validatePassword = e => {
    if (e.target.value.length < 8) {
      let passwordError = "Password must be 8 characters long!";
      this.setState({ passwordError, invalid: true });
    } else {
      this.setState({ passwordError: "", password: e.target.value }, () =>
        this.validate()
      );
    }
  };
  validate = () => {
    if (
      !(this.state.emailError || this.state.passwordError) &&
      this.state.email &&
      this.state.password
    ) {
      this.setState({ invalid: false });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/products");
  };
  render() {
    return (
      <React.Fragment>
        <Grid container sm={12}>
          <Grid item sm={6} style={{ width: 700 }}>
            <Paper>
              <AppBar
                position="static"
                style={{
                  borderRadius: 2,
                  textTransform: "capitalize",
                  fontSize: 16,
                  alignItems: "center"
                }}
              >
                <Toolbar>
                  <Typography
                    variant="overline"
                    color="inherit"
                    style={{
                      flex: 1,
                      textTransform: "capitalize",
                      fontSize: 14
                    }}
                  >
                    Product Manager
                  </Typography>
                </Toolbar>
              </AppBar>
              <form onSubmit={this.handleSubmit}>
                <br />
                <Typography variant="subtitle1">Email</Typography>
                <TextField
                  name="price"
                  fullWidth
                  id="price"
                  variant="outlined"
                  placeholder="Enter Your Email"
                  required
                  onChange={this.onChange}
                  onBlur={this.onBlurPrice}
                />
                <Typography variant="subtitle1">Password</Typography>
                <TextField
                  name="price"
                  fullWidth
                  id="price"
                  variant="outlined"
                  required
                  placeholder="Enter Your Password"
                  onChange={this.onChange}
                  onBlur={this.onBlurPrice}
                />
                <Typography variant="subtitle1" style={{ color: "red" }}>
                  {this.state.passwordError}
                </Typography>
                <br /> <br />
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  fullWidth
                  disabled={this.state.invalid}
                >
                  Log In
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Login;
