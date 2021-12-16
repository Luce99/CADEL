import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    nombre: yup
    .string("El nombre debe ser un texto"),
    apellido: yup 
    .string("El apellido debe ser se un texto"),
    identificacion: yup  
    .string("La identificación debe ser válida"),
    correo: yup
    .string("El correo debe ser un texto")
    .email("Debe ingresar un correo válido")
})

export default yupResolver(schema) 