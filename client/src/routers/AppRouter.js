// Crear sistema de rutas
import {Switch, Route} from 'react-router-dom'
import UsersPage from '../pages/admin/usersPage'
import LiderPage from '../pages/admin/liderPage'
import NotFoundPage from '../pages/NotFoundPage'
import Layout from '../components/layouts/Layout'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AccountPage from '../pages/AccountPage'
import projectPage from '../pages/projectPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import roles from '../helpers/roles'
import routes from '../helpers/routes'
import ProjectsPage from '../pages/projectsPage'
export default function AppRouter() {
  return (
        <Switch>
          <PublicRoute exact path={routes.home} component={HomePage}></PublicRoute>
          <PublicRoute exact path={routes.login} component={LoginPage}></PublicRoute>
          <PublicRoute exact path={routes.register} component={RegisterPage}></PublicRoute>
          <PrivateRoute exact path={routes.account} component={AccountPage}></PrivateRoute>
          <PrivateRoute exact path={routes.Projects} component={ProjectsPage}></PrivateRoute>
          <PrivateRoute exact path={routes.Project()} component={projectPage}></PrivateRoute>
          <PrivateRoute hasRole={roles.administrador} exact path={routes.users.admin} component={UsersPage}/> {/* Gestión de Usuarios*/}
          <PrivateRoute hasRole={roles.lider} exact path={routes.users.lider} component={LiderPage}/> {/* Gestión de Usuarios*/}

          <Route path='*' component={NotFoundPage}/> {/* Cuando se ingresa o se quiere ingresar una ruta no relacionada*/}
        </Switch>
  )
}
