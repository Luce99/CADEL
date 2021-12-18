import React, { useState} from 'react'
import {gql, useMutation, useQuery} from '@apollo/client'
import {Container, Row, Button, Table, Modal, ModalBody, FormGroup, Form} from 'react-bootstrap'
import useModal from '../hooks/useModal'

export default function InscriptionPage(){

    //Modal
    //const [openEditModal] = useModal ();

  const GetInscriptions = gql` query getinsciption {
    getInscripcion {
      _id
      estadoInscripcion
      fechaIngreso
      fechaEgreso
      estudiante
      projects
    }
  }`
  
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
  }`

  const UpdateInscription = gql`
  mutation updateInscription($id: ID!) {
    updateInscripcion(_id: $id) {
      _id
      estadoInscripcion
      fechaIngreso
      fechaEgreso
      estudiante
      projects
    }
  }`

  //crear
  
  const [estudiante, setEstudiante] = useState('')
  const[projects, setProjects] = useState('')

  const [createInscripcion]= useMutation(CreateInscription,{
    refetchQueries: [ { query: GetInscriptions}]
  })
  const handleSubmit = e =>{
    e.preventDefault()

    createInscripcion({ variables: {estudiante, projects}})

    setEstudiante('')
    setProjects('')

    window.close()
  }

 //editar
  //const [estadoUsuario, setEstadoUsuario] = useState('')
  //const[fechaIngreso, setFechaIngreso] = useState('')
  //const[fechaEgreso, setFechaEgreso] = useState('')

  //const [changeInscription]= useMutation(UpdateInscription)
  //const handleSubmitI = e=> {
    //e.preventDefault()

    //changeInscription({variables:{estadoUsuario, fechaIngreso, fechaEgreso}})

    //setEstadoUsuario('')
    //setFechaIngreso('')
    //setFechaEgreso('')

  //}}

  //listar
  const {data,error, loading} = useQuery(GetInscriptions)
  if (error) return <span style={{color: 'red'}}>{error}</span>


  return (
    <>
    <Container>
    <div>
    <Row>
      <h1>Nueva inscripción</h1>
      <form onSubmit={handleSubmit}>
        <input id={+true}  placeholder='Ingresa el id del estudiante' value={estudiante} onChange ={evt => setEstudiante(evt.target.value)}/>     
        <input id={+true} placeholder='Ingresa el id del proyecto' value={projects} onChange ={evt => setProjects(evt.target.value)}/>
        <button color="success">Agregar inscripción</button>
      </form>
      </Row>
      <Table>
        <thead><tr><th>Id</th><th>Estado inscripción</th><th>Fecha ingreso</th><th>Fecha egreso</th><th>Estudiante</th><th>Proyectos</th></tr></thead>
        <tbody>{loading 
      ? <tr></tr>
      :( <>{data && data.getInscripcion.map((inscription)=>(
        <tr key={inscription._id} >
          <td>{inscription._id}</td>
          <td>{inscription.estadoInscripcion}</td>
          <td>{inscription.fechaIngreso}</td>
          <td>{inscription.fechaEgreso}</td>
          <td>{inscription.estudiante}</td> 
          <td>{inscription.projects}</td>
          <td><Button color="primary">Editar</Button>  <Button variant="danger">Eliminar</Button></td>
        </tr>
      ))}</>)}</tbody>
      </Table>
    </div>
    </Container>
    {/*<Modal isOpen={openEditModal}>
        <Modal.Header>
          <div>
            <h2>Editar inscripción</h2>
          </div>
        </Modal.Header>
        
        <ModalBody>
          <Form  onSubmit={handleSubmitI}>
          <FormGroup>
            <label>Id:</label>
            <input className='form-control' name="_id"  readOnly type="text"/>
          </FormGroup>

          <FormGroup>
            <label>Estado inscripcion:</label>
            <input className='form-control' name="estadoInscripcion"  type="text" onChange={handleSubmitI} />
          </FormGroup>

          <FormGroup>
            <label>Fecha ingreso:</label>
            <input className='form-control' name="fechaIngreso"  type="text" onChange={handleSubmitI} />
          </FormGroup>

          <FormGroup>
            <label>Fecha Egreso:</label>
            <input className='form-control' name="fechaEgreso"  type="text" onChange={handleSubmitI} />
          </FormGroup>

          <FormGroup>
            <label>Estudiante:</label>
            <input className='form-control' name="estudiante"  readOnly type="text"/>
          </FormGroup>

          <FormGroup>
            <label>Proyectos:</label>
            <input className='form-control' name="projects"  readOnly type="text"/>
          </FormGroup>
          </Form>
        </ModalBody>
        <Modal.Footer>
                <Button variant="secondary" onClick={window.close()}>Cancelar</Button>
                <Button variant="primary" onClick= {handleSubmitI}>Actualizar</Button>
                        
            </Modal.Footer>
      </Modal>*/}
    </>
  )
}