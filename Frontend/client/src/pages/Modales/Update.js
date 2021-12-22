import React, {useState} from 'react'
import { useMutation } from '@apollo/client'


export default function Update  () {

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
  
    var [id, setId]= useState('')
    var [estadoInscripcion, setEstadoInscripcion] = useState('')
    var [fechaIngreso, setFechaIngreso] = useState('')
    var [fechaEgreso, setFechaEgreso] = useState('')
    var [estudiante, setEstudiante] = useState('')
    var [projects, setProjects] = useState('')
    var [index]= useState(0)

    const handleSubmit = e => {
        e.preventDefault()


    }
}