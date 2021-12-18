import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes'

export default function Navigation() {
  
  const { logout } = useAuth();
  
  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' bg="dark" > {/*  Para definir las medidas de pantalla, para que deje de ser a mobil a desktop, se utiliza el atributo collapseOnSelect e indicamos que se mostrará el menú expandido con lg. bg->background */}
      <Navbar.Brand as={NavLink} to={routes.home}> {/* Para resaltar un titulo del menú nav*/}
        Task Manage
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to={routes.Projects}>Proyectos</Nav.Link>
          <NavDropdown title='Rol'> {/* Lista desplegable*/}
            <NavDropdown.Item as={NavLink} to={routes.users.admin}>Administrador</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to={routes.users.lider}>Lider</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to={routes.login}>Login</Nav.Link>
          <Nav.Link as={NavLink} to={routes.register}>Registrarse</Nav.Link>
          <Nav.Link as={NavLink} to={routes.account}>Mi cuenta</Nav.Link>
          <Nav.Link to={routes.account} onClick={logout}>Cerrar Sesión</Nav.Link>
        </Nav>
        {/* Para crear las rutas relacionadas con la autenticación */}
      </Navbar.Collapse>
    </Navbar>
  )
}
