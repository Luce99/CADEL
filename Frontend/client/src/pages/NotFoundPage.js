import {Container, Row, Col} from 'react-bootstrap'
import routes from '../helpers/routes'
import { Link } from 'react-router-dom'

export default function NotFoundPage(){
    return (
        <Container>
        <Row className="mt-5">
            <Col md={{span: 6, offset: 3}}className="text-center">
            <img
            style={{width: '100%'}}
            src="/img/404-not-found.svg"
            alt="error-404"
            />
            <h2>¿Estas perdido?</h2>
            <p>Vuelve al <Link to ={routes.home}>inicio</Link></p>
            </Col>        
        </Row>
        </Container>
    )
}