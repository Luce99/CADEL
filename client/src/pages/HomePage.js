import {Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import routes from '../helpers/routes'

export default function HomePage() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col xs={{span:'12'}} md={{span:6}} className='mb-5'>
          <h2>Bienvenido o Bienvenida al Gestor de proyectos</h2>
          <p>Aqui podrás gestionar tus proyectos</p>
          <p> Marca tus proyectos según la fase en la que se encuentre</p>
          <div>
            <Link to={routes.login}>Ingresa</Link> Inicia seción o <Button as={Link} to={routes.register} className="ml-1">Crea tu cuenta</Button>
          </div>
        
        </Col>
        <Col>
          <img
            className='img-fluid'
            src="/img/task-manager.svg"
            alt="gestor-de-proyectos"
          />
        </Col>

      </Row>
    </Container>
  )
}
