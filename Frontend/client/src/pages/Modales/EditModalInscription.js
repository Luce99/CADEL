import { useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { Button, FormControl } from "react-bootstrap";
import { gql } from "@apollo/client";
import { Modal, ModalBody, FormGroup, Form } from "react-bootstrap";

export default function EditModalInscription({
  isOpen,
  close,
  id,
  estadoInscripcionD,
  fechaIngresoD, 
  fechaEgresoD,
  estudiante,
  projects,
}) {

  const [estadoInscripcion, setEstadoInscripcion] = useState();
  const [fechaIngreso, setFechaIngreso] = useState();
  const [fechaEgreso, setFechaEgreso] = useState();

  useEffect(() => {
    setEstadoInscripcion(estadoInscripcionD);
    setFechaIngreso(fechaIngresoD ? fechaIngresoD.substring(0,10) : '');
    setFechaEgreso(fechaEgresoD ? fechaEgresoD.substring(0,10) : '');
  }, [estadoInscripcionD, fechaIngresoD, fechaEgresoD])

  const handleSubmit = (e) => {
    e.preventDefault();
    changeInscription({ variables : { id: id, estadoInscripcion: estadoInscripcion, fechaIngreso: new Date(fechaIngreso).toISOString(), fechaEgreso: new Date(fechaEgreso).toISOString()  }});
    close()
  };

  const UpdateInscription = gql`
  mutation UpdateInscripcion($id: String!, $estadoInscripcion: String, $fechaIngreso: DateTime, $fechaEgreso: DateTime) {
    updateInscripcion(_id: $id, estadoInscripcion: $estadoInscripcion, fechaIngreso: $fechaIngreso, fechaEgreso: $fechaEgreso) {
      _id
      estadoInscripcion
      fechaIngreso
      fechaEgreso
      estudiante
      projects
    }
  }
  `;

  const [changeInscription] = useMutation(UpdateInscription);

  return (
    <>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header closeButton>
          <div>
            <h2>Editar inscripción</h2>
          </div>
        </Modal.Header>

        <ModalBody>
          <Form>
            <FormGroup>
              <label>Id:</label>
              <FormControl
                className="form-control"
                name="_id"
                readOnly
                type="text"
                value={id}
              ></FormControl>
            </FormGroup>

            <FormGroup>
              <label>Estado inscripcion:</label>
              <FormControl
                id={+true}
                className="form-control"
                name="estadoInscripcion"
                type="text"
                value={estadoInscripcion}
                onChange={(evt) => setEstadoInscripcion(evt.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup>
              <label>Fecha ingreso:</label>
              <FormControl
                id={+true}
                className="form-control"
                name="fechaIngreso"
                type="date"
                value={fechaIngreso}
                onChange={(evt) => setFechaIngreso(evt.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup>
              <label>Fecha Egreso:</label>
              <FormControl
                id={+true}
                className="form-control"
                name="fechaEgreso"
                type="date"
                value={fechaEgreso}
                onChange={(evt) => setFechaEgreso(evt.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup>
              <label>Estudiante:</label>
              <FormControl
                id={+true}
                className="form-control"
                name="estudiante"
                value={estudiante}
                readOnly
                type="text"
              ></FormControl>
            </FormGroup>

            <FormGroup>
              <label>Proyectos:</label>
              <FormControl
                id={+true}
                className="form-control"
                name="projects"
                value={projects}
                readOnly
                type="text"
              ></FormControl>
            </FormGroup>
          </Form>
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Actualizar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

