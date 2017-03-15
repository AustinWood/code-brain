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

  // TODO: DRY
  authFooter() {
    let text;
    let link;
    if (this.props.formType === "login") {
      text = "No account yet?";
      link = (
        <Link to="/signup" className="auth-footer-link">
          Sign up here!
        </Link>
      );
    } else {
      text = "Already signed up?";
      link = (
        <Link to="/login" className="auth-footer-link">
          Log in here!
        </Link>
      );
    }
    return(
      <div className="auth-footer-container">
        <p className="auth-footer-text">
          {text}&nbsp;&nbsp;{link}
        </p>
      </div>
    );
  }

  renderErrors() {
    if (this.props.errors.length === 0) {
      return (<div></div>);
    }
    return (
      <ul className="auth-error-container">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="auth-error">
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
            {this.renderErrors()}
            <div className="auth-submit-container">
              <input
                type="submit"
                value="Submit"
                className="auth-submit" />
              <br/>
            </div>
          </div>
        </form>
        {this.authFooter()}
      </div>
    );
  }

}

export default withRouter(SessionForm);
