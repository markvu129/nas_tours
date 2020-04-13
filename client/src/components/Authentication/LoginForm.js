import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import apiRoutes from "../../routes/ApiRoutes";
import Auth from "../../modules/Auth.js";
import history from "../../modules/history";
import "./css/LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.clickTab = this.clickTab.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

    this.state = {
      signup: false,
      login: true,
      user: {
        email: "",
        password: "",
        password_repeat: "",
        name: ""
      },
      signupSuccess: false,
      loginSuccess: false,
      error: false,
      chkbox: false
    };
  }

  onChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({
      user: user
    });
  }

  handleCheck() {
    this.setState({
      chkbox: !this.state.chkbox
    });
  }

  handleLoginSubmit(event) {
    event.preventDefault();

    let postData = {
      email: this.state.user.email,
      password: this.state.user.password
    };

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("post", apiRoutes.login);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader(
      "Access-Control-Allow-Methods",
      "GET, PUT, POST, DELETE, OPTIONS"
    );
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        this.setState({
          submitSuccess: true,
          loginSuccess: true
        });
        Auth.authenticateUser(
          xhr.response.data.user,
          xhr.response.data.token.accessToken
        );
        history.goBack();
      } else {
        this.setState({
          error: xhr.response.errors[0].messages[0]
        });
      }
      this.setState({
        user: {
          email: "",
          password: ""
        }
      });
    });
    xhr.send(JSON.stringify(postData));
  }

  handleSignUpSubmit(event) {
    event.preventDefault();

    if (this.state.user.password === this.state.user.password_repeat) {
      let postData = {
        email: this.state.user.email,
        password: this.state.user.password,
        role: "user"
      };

      // create an AJAX request
      const xhr = new XMLHttpRequest();
      xhr.open("post", apiRoutes.signup);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.setRequestHeader(
        "Access-Control-Allow-Methods",
        "GET, PUT, POST, DELETE, OPTIONS"
      );
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.responseType = "json";
      xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
          this.setState({
            submitSuccess: true,
            signup: false,
            login: true,
            signupSuccess: true
          });
        } else {
          this.setState({
            error: xhr.response.errors[0].messages[0]
          });
        }
        this.setState({
          user: {
            email: "",
            password: "",
            name: "",
            password_repeat: ""
          }
        });
      });
      xhr.send(JSON.stringify(postData));
    } else {
      this.setState({
        error: "Password does not match."
      });
    }
  }

  clickTab(word) {
    let signup, login;
    if (word == "signup") {
      signup = true;
      login = false;
    } else {
      login = true;
      signup = false;
    }
    return this.setState({ login: login, signup: signup });
  }

  responseFacebook(res) {
    console.log(res);
  }

  responseGoogle(res) {
    console.log(res);
  }

  componentDidMount() {
    console.log(history);
  }

  componentDidUpdate() {}

  render() {
    let self = this;
    return (
      <div className="authentication-form-section">
        <div className="one_time_authentication-box">
          <div className="lb-header authentication-header">
            <div
              onClick={self.clickTab.bind(null, "login")}
              className={
                self.state.login
                  ? "column-50-inline authentication-option active"
                  : "column-50-inline authentication-option authentication-inactive"
              }
            >
              <a
                id="login-box-link"
                className="authentication-authentication-tab"
              >
                Sign in
              </a>
            </div>
            <div
              onClick={self.clickTab.bind(null, "signup")}
              className={
                self.state.signup
                  ? "column-50-inline authentication-option active"
                  : "column-50-inline authentication-option authentication-inactive"
              }
            >
              <a
                id="signup-box-link"
                className="authentication-authentication-tab"
              >
                Sign up
              </a>
            </div>
          </div>

          <div className="donate-form-body authentication-form-body-authentication">
            <div className="social-login">
              <FacebookLogin
                appId="464070144196079"
                fields="name,email,picture"
                callback={this.responseFacebook}
                textButton="LOGIN VIA FACEBOOK"
                cssClass="social-login-fb authentication-form-fb"
              />
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="LOGIN VIA GOOGLE"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
                icon={true}
                style="social-login-gg"
              />
            </div>

            {this.state.login ? (
              <form className="email-login">
                {this.state.signupSuccess ? (
                  <div className="success-msg">
                    You have signed up successfully. You can sign in.
                  </div>
                ) : (
                  <div></div>
                )}
                <div className="u-form-group">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={this.state.user.email}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="u-form-group">
                  <input
                    id="password_input"
                    type="password"
                    name="password"
                    value={this.state.user.password}
                    onChange={this.onChange}
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="u-form-group">
                  <button onClick={this.handleLoginSubmit}>Sign in</button>
                </div>
                <div className="u-form-group forgot-password-link">
                  <a className="forgot-password">Forget password?</a>
                </div>

                {this.state.error ? (
                  <div className="error-msg">this.state.error</div>
                ) : (
                  <div></div>
                )}

                {this.state.loginSuccess ? (
                  <div className="success-msg">
                    You have successfully signed in :)
                  </div>
                ) : (
                  <div></div>
                )}
              </form>
            ) : (
              <form className="email-signup">
                <div className="u-form-group">
                  <input
                    placeholder="Username"
                    type="text"
                    name="name"
                    value={this.state.user.name}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="u-form-group">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={this.state.user.email}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="u-form-group">
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.user.password}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="u-form-group">
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    name="password_repeat"
                    value={this.state.user.password_repeat}
                    onChange={this.onChange}
                    required
                  />
                </div>

                <div className="u-form-group">
                  <button onClick={this.handleSignUpSubmit}>Sign up</button>
                </div>

                {this.state.error ? (
                  <div className="error-msg">{this.state.error}</div>
                ) : (
                  <div></div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
