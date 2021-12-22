import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Signin from "./login/signin";
import Signup from "./login/signup";
import routes from "../helpers/routes";

class LoginPage extends React.Component {
  state = {
    showLogin: true,
    showRegister: false,
  };

  showRegister = (ev) => {
    ev.preventDefault();
    this.setState({ showLogin: false, showRegister: true });
  };

  showLogin = (ev) => {
    ev.preventDefault();
    this.setState({ showLogin: true, showRegister: false });
  };

  render() {
    const { showLogin, showRegister } = this.state;

    return (
      <Container>
        {showLogin && <Signin as={Link} to={routes.register} />}
        {showRegister && <Signup handleClick={this.showLogin} />}
      </Container>
    );
  }
}

export default LoginPage;
