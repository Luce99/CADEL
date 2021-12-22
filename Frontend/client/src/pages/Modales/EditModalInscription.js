import {Alert, Button, FormControl} from 'react-bootstrap'
import {gql, useMutation, useQuery} from '@apollo/client'
import { Modal, ModalBody, FormGroup, Form} from 'react-bootstrap'
import { useState, useEffect, Component } from 'react'

export default class EditModalInscription extends Component {

  constructor(props, context) {
    super(props);
    this.state={
    estadoInscripcion : props.estadoInscripcion,
    fechaIngreso : props.fechaIngreso.substring(0, 10),
    fechaEgreso : props.fechaEgreso.substring(0, 10)

    }
    console.log(this.props)
}
UpdateInscription =  gql`
mutation updateInscription($id: String!, estadoInscripcion:String!, fechaIngreso:Date!, fechaEgreso:Date!) {
updateInscripcion(_id: $id, estadoInscripcion: $estadoInscripcion, fechaIngreso: $fechaIngreso, fechaEgreso: $fechaEgreso) {
_id
estadoInscripcion
fechaIngreso
fechaEgreso
estudiante
projects
}
}`

componentDidMount() {
  console.log("The componentDidMount method is only fired the first time the component is mounted");
}
componentWillReceiveProps(nextProps) {
  console.log('componentWillReceiveProps', nextProps);
  if (this.props !== nextProps) {
   this.setState({
     ...nextProps,
    fechaIngreso : nextProps.fechaIngreso.substring(0, 10),
    fechaEgreso : nextProps.fechaEgreso.substring(0, 10)
   });
  }
 }

  render(){
    var{isOpen, close, id, estadoInscripcion, fechaIngreso, fechaEgreso, estudiante, projects}= this.props
    
 
  return(
    <div>
    <Modal show={isOpen} onHide={close}>
    <Modal.Header closeButton>
  <div>
    <h2>Editar inscripción</h2>
  </div>
</Modal.Header>

<ModalBody>
  <Form  onSubmit={this.handleSubmit}>
  <FormGroup>
    <label>Id:</label>
    <input id={+true} className='form-control' name="_id"  readOnly type="text" value= {id}/>
     </FormGroup>

    <FormGroup> 
      <label>Estado inscripcion:</label>
      <FormControl id={+true} className='form-control' name="estadoInscripcion"  type="text" value= {this.state.estadoInscripcion} onChange={evt => this.setState({estadoInscripcion:evt.target.value })}>

      </FormControl>
    </FormGroup>

    <FormGroup>
        <label>Fecha ingreso:</label>
        <input id={+true} className='form-control' name="fechaIngreso"  type="date" value= {this.state.fechaIngreso} onChange={evt => this.state.fechaIngreso=evt.target.value} />
      </FormGroup>

      <FormGroup>
        <label>Fecha Egreso:</label>
        <input id={+true} className='form-control' name="fechaEgreso"  type="date" value= {this.state.fechaEgreso} onChange={evt => this.state.fechaEgreso=evt.target.value} />
      </FormGroup>

      <FormGroup>
        <label>Estudiante:</label>
        <input id={+true} className='form-control' name="estudiante" value= {estudiante} readOnly type="text"/>
      </FormGroup>

      <FormGroup>
        <label>Proyectos:</label>
        <input id={+true} className='form-control' name="projects" value= {projects} readOnly type="text"/>
      </FormGroup>
      </Form>
    </ModalBody>
    <Modal.Footer>
            <Button variant="secondary" onClick={close}>Cancelar</Button>
            <Button variant="primary" onClick={  useMutation(UpdateInscription)}>
 Actualizar</Button>
        </Modal.Footer>
    </Modal></div>);
    }
    listenerHandler = () => {
      this.props.mutate({
          variables: {
            id:this.props.id, 
            estadoInscripcion: this.state.estadoInscripcion,
            fechaIngreso: this.state.fechaIngreso, 
            fechaEgreso: this.state.fechaEgreso
          },
      });
  };
    handleSubmit (e) {
      e.preventDefault()
      }}
