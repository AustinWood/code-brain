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
      return <p>Log In:</p>;
    } else {
      return <p>Sign Up:</p>;
    }
  }

  authFooter() {
    if (this.props.formType === "login") {
      return <p>No account yet?<br/><Link to="/signup">Sign up here!</Link></p>;
    } else {
      return <p>Already signed up?<br/><Link to="/login">Log in here!</Link></p>;
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
          <br/>
          {this.authHeader()}
          {this.renderErrors()}
          <div className="login-form">
            <label> Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input" />
            </label>
            <br/>
            <label> Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input" />
            </label>
            <br/>
            <input type="submit" value="Submit" />
            <br/>
            {this.authFooter()}
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);
