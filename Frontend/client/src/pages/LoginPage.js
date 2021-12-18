import React from "react";
import { Container } from "react-bootstrap";
import Signin from "./login/signin";
import Signup from "./login/signup";

class LoginPage extends React.Component {

    state={
        showLogin:true,
        showRegister:false,        
    }

    showRegister =(ev)=>{
        ev.preventDefault()
        this.setState({showLogin:false, showRegister:true})
    }

    showLogin =(ev)=>{
        ev.preventDefault()
        this.setState({showLogin:true, showRegister:false})
    }

    render() {

        const {showLogin,showRegister}=this.state;

        return (
            <Container>
            {showLogin && <Signin handleClick={this.showRegister}/>}
            {showRegister && <Signup handleClick={this.showLogin}/>}
            </Container>



        )
    }
}

export default LoginPage