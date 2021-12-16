import { createContext } from "react";
import { useState } from "react";
import roles from "../helpers/roles";
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext()

export default function AuthProvider({children}){
    const history = useHistory()
    const[user, setUser] = useState(null); 
    
    const login = (userCredentials, fromLocation)=> 
    {setUser({id:1, role:roles.admin});
    if (fromLocation){
    history.push(fromLocation)
        }
    }
    const logout =() => setUser(null) 
    const updateUser = (data) => {
        setUser({
            ...user,
            ...data
        })
    }

    const isLogged = () => !! user;
    const hasRole = (role) => user?.role === role;

    const contextValue = {
        user,
        isLogged,
        login,
        logout,
        updateUser,
        hasRole
    }
    return <AuthContext.Provider value= {contextValue}>
            {children}
        </AuthContext.Provider>
    
}