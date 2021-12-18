import React from "react";
import { Card, Button, Form, Row } from "react-bootstrap";

export default function ({ handleClick }) {

    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Header> <h4>Proyecto CADEL - Registro</h4></Card.Header>
                <Card.Body>
                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicNombre">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tus nombres" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicApellido">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tus apellidos" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicId">
                            <Form.Label>Identificación</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu número de identificación" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu correo" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                        </Form.Group>

                        
                        
                        <Form.Group className="mb-3" controlId="formBasicEstado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control required  type="text" placeholder="Estado" defaultValue="Pendiente"/>
                        </Form.Group>




                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <p className="registro text-center">
                        ¿Tienes cuenta?<a href="" onClick={handleClick}>inicia sesión</a>
                    </p>
                </Card.Footer>
            </Card>
        </div>
    );
}