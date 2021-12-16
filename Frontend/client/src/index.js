import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {ApolloClient, InMemoryCache, HttpLink, gql} from '@apollo/client'


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:5010/graphql'
  })
})

const query = gql`
query {
  getUsers {
    nombre
    apellido
    identificacion
    tipoUsuario
    estado
    correo
    projects{
      nombre
    }
  }
}`

client.query({query})
  .then(res => {
    console.log(res.data)
  })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
