import React, { useEffect, useState } from 'react'
import {gql, useLazyQuery} from '@apollo/client'

const GetUserById = gql`
query getUserById ($idToSearch: String!){
    getUser(id: $idToSearch){
        nombre
        apelllido
        identificacion
        tipoUsuario
        estado
        correo
        projects{
        nombre
      }
    }
} `

const Users = ({users}) => {
    const [getUser, result ] = useLazyQuery(GetUserById)
    const [user, setUser] = useState(null)

    const showUser = nombre => {
        getUser({variables: {idToSearch: nombre}})
    }

    useEffect(()=> {
        if (result.data) {
            setUser(result.data.getUser)
        }
    }, [result])

    if (user){
       return(<div> <h2>{user.nombre}</h2>
        <div>{user.apellido}</div>
        <div>{user.identificacion}</div>
        <div>{user.tipoUsuario}</div>
        <div>{user.estado}</div>
        <div>{user.correo}</div>
        <div>{user.projects.id},{user.projects.nombre}</div>
        <button onClick={()=> setUser(null)}>Cerrar</button>
        </div> ) 
    } 

    if (users === null) return null
    return (
        <div>
            <h2>Usuarios</h2>
            {users.map(user => 
            <div key={user.id} onClick={()=> {showUser(user.nombre)}}>
                {user.nombre} {user.apellido}
                </div>)}
        </div>
    )
}

export default Users;
