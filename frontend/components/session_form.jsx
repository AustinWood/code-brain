import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  authHeader() {
    if (this.props.formType === "login") {
      return <p className="auth-header">Log in</p>;
    } else {
      return <p className="auth-header">Sign up</p>;
    }
  }

  authFooter() {
    if (this.props.formType === "login") {
      return(
        <div>
          <p className="auth-footer">No account yet?</p>
            <Link to="/signup">
              <p className="auth-footer-link">Sign up here!</p>
            </Link>
        </div>
      );
    } else {
      return(
        <div>
          <p className="auth-footer">Already signed up?</p>
          <Link to="/login">
            <p className="auth-footer-link">Log in here!</p>
          </Link>
        </div>
      );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.authHeader()}
          {this.renderErrors()}
          <div className="login-form">
            <div className="login-row">
              <img src={"/assets/user.png"} className="login-img" />
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="auth-input" />
            </div>
            <br/>
            <div className="login-row">
              <img src={"/assets/password.png"} className="login-img" />
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="auth-input" />
            </div>


            <br/>
            <input
              type="submit"
              value="Submit"
              className="auth-submit" />
            <br/>
            {this.authFooter()}
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);
