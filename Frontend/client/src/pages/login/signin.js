import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import routes from "../../helpers/routes";
import { Link } from "react-router-dom";

export default function ({ handleClick }) {

    const args = {}

    const handleChange = (ev, input) => {
 console.log(input);
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header> <h4>Proyecto CADEL</h4></Card.Header>
                <Card.Body>
                    <Form > 
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control  onChange={handleChange} type="email" placeholder="Ingresa tu correo" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer><p className="registro text-center">
                ¿No tienes cuenta?  <Button as={Link} to={routes.register} className ="ml-1"> Registate </Button>
                        </p></Card.Footer>
            </Card>
        </div>
    );
}