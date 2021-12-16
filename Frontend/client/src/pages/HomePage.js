import {Container, Row, Col, Button} from 'react-bootstrap'
import routes from '../helpers/routes'
import { Link } from 'react-router-dom'

export default function HomePage(){
    return (
     <Container>
         <Row className= "mt-5">
             <Col xs ={{span:12}}  className="mb-5">
             <h2> Bienvenid@ al gestor de tareas</h2>
             <p>Aquí podrás gestionar tus proyectos</p>
             <p>
                 lista los proyectos, inscribete a un proyecto, agrega un avance.
             </p>
             <div>
                 <Link to= {routes.login}> Ingresa </Link> o <Button as={Link} to={routes.register} className ="ml-1"> registrate </Button>
             </div>
             </Col>
             <Col>
             <img 
                className= "img-fluid"
                src="/img/task-manager.svg"
                alt="gestor-de-tareas"
             />
             <p>¡Con fácil acceso a tus proyectos activos mejorarás tu productividad!</p>
             </Col>
         </Row>
     </Container>
    )
}