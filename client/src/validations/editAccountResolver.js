import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import roles from '../helpers/roles';

const schema = yup.object().shape({
  name:yup
    .string('La contraseña debe ser texto')
    .required('Debe ingresar un nombre'),
  email: yup
    .string('El email debe ser un texto')
    .required('debe ingresar un correo electrónico')
    .email('Debe ingresar un email válido'),
  role: yup
    .string('El rol debe ser un texto')
    .oneOf(Object.keys(roles))
})

export default yupResolver(schema)