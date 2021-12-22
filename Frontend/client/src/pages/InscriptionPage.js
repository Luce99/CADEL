import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Container, Row, Button, Table } from "react-bootstrap";
import EditModalInscription from "./Modales/EditModalInscription";
import useModal from "../hooks/useModal";

export default function InscriptionPage() {

  //Modal
  const [
    isOpenEditModalInscription,
    OpenEditModalInscription,
    closeEditModalInscription,
  ] = useModal();

  const [id, setId] = useState();
  const [estadoInscripcion, setEstadoInscripcion] = useState();
  const [fechaIngreso, setFechaIngreso] = useState();
  const [fechaEgreso, setFechaEgreso] = useState();
  const [estudiante, setEstudiante] = useState();
  const [projects, setProjects] = useState();

  const GetInscriptions = gql`
    query getinsciption {
      getInscripcion {
        _id
        estadoInscripcion
        fechaIngreso
        fechaEgreso
        estudiante
        projects
      }
    }
  `;

  const CreateInscription = gql`
    mutation createInscription($estudiante: String!, $projects: String!) {
      createInscripcion(estudiante: $estudiante, projects: $projects) {
        _id
        estadoInscripcion
        fechaIngreso
        fechaEgreso
        estudiante
        projects
      }
    }
  `;

  //eliminar
  const DeleteInscripcion = gql`
    mutation deleteInscripcion($id: String!) {
      deleteInscripcion(_id: $id) {
        _id
      }
  }`


  const [deleteInscripcion]= useMutation(DeleteInscripcion, {
    refetchQueries: [ { query: GetInscriptions}]
  })

  const deleteInscription = async (id) => {
    await deleteInscripcion({variables:{id}})
  } 
  //crear
  var [index] = useState(0);

  const [createInscripcion] = useMutation(CreateInscription, {
    refetchQueries: [{ query: GetInscriptions }],
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    createInscripcion({ variables: { estudiante, projects } });

    setEstudiante("");
    setProjects("");

    window.close();
  };
  function toggle(inscription) {
    setId(inscription._id);
    setEstadoInscripcion(inscription.estadoInscripcion);
    setFechaIngreso(inscription.fechaIngreso);
    setFechaEgreso(inscription.fechaEgreso);
    setEstudiante(inscription.estudiante);
    setProjects(inscription.projects);
    OpenEditModalInscription();
  }

  //listar
  const { data, error, loading } = useQuery(GetInscriptions);
  if (error) return <span style={{ color: "red" }}>{error}</span>;

  return (
    <>
      <Container>
        <div>
          <Row>
            <h1>Nueva inscripción</h1>
            <form onSubmit={handleSubmit}>
              <input
                id={+true}
                placeholder="Ingresa el id del estudiante"
                value={estudiante}
                onChange={(evt) => setEstudiante(evt.target.value)}
              />
              <input
                id={+true}
                placeholder="Ingresa el id del proyecto"
                value={projects}
                onChange={(evt) => setProjects(evt.target.value)}
              />
              <button color="success">Agregar inscripción</button>
            </form>
          </Row>
          <Table>
            <thead>
              <tr>
                <th>Index</th>
                <th>Id</th>
                <th>Estado inscripción</th>
                <th>Fecha ingreso</th>
                <th>Fecha egreso</th>
                <th>Estudiante</th>
                <th>Proyectos</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr></tr>
              ) : (
                <>
                  {data &&
                    data.getInscripcion.map((inscription) => (
                      <tr key={inscription._id}>
                        <td>{(index = index + 1)}</td>
                        <td>{inscription._id}</td>
                        <td>{inscription.estadoInscripcion}</td>
                        <td>{inscription.fechaIngreso}</td>
                        <td>{inscription.fechaEgreso}</td>
                        <td>{inscription.estudiante}</td>
                        <td>{inscription.projects}</td>
                        <td>
                          <Button
                            color="primary"
                            onClick={() => toggle(inscription)}
                          >
                            Editar
                          </Button>
                          <Button
                            color="primary"
                            onClick={() => deleteInscription(inscription._id)}
                          >
                            Borrar
                          </Button>
                        </td>
                      </tr>
                    ))}
                </>
              )}
            </tbody>
          </Table>
        </div>
      </Container>
      <EditModalInscription
        isOpen={isOpenEditModalInscription}
        close={closeEditModalInscription}
        id={id}
        estadoInscripcionD={estadoInscripcion}
        fechaIngresoD={fechaIngreso}
        fechaEgresoD={fechaEgreso}
        estudiante={estudiante}
        projects={projects}
      />
    </>
  );
}
