import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes'

export default function Navigation(){

    const {logout} = useAuth();

    return(
        <Navbar collapseOnSelect expand= "lg" variant = "dark" bg= "dark">
           <Navbar.Brand as= {NavLink} to = {routes.home}>Gestor de tareas</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
           <Navbar.Collapse id= "responsive-navbar-nav">
            <Nav className="me-auto" >
                <Nav.Link as={NavLink} to ={routes.projects}>Proyectos</Nav.Link>
                <Nav.Link as={NavLink} to ={routes.InscriptionPage}>Inscripciones
               </Nav.Link>
               <NavDropdown title="Admin">
               <NavDropdown.Item as={NavLink} to ={routes.users.admin}>Usuarios</NavDropdown.Item>
               <NavDropdown.Item as={NavLink} to={routes.users.lider}>Lider</NavDropdown.Item>
               </NavDropdown>
               </Nav>
               <Nav>
               <Nav.Link as={NavLink} to ={routes.login}>Login</Nav.Link>
               <Nav.Link as={NavLink} to ={routes.register}>Registro</Nav.Link>
               <Nav.Link as={NavLink} to ={routes.account}>Mi cuenta</Nav.Link>
               <Nav.Link to ={routes.account}onClick={logout}>Cerrar sesión</Nav.Link>
               </Nav>
           </Navbar.Collapse>
            <h1>Navigation</h1>
        </Navbar>
    )
}