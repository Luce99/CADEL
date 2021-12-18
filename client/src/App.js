import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layouts/Layout';
// ALTERACIONES DESDE AQUÍ
// import {gql,useQuery} from '@apollo/client'

// const usuario = gql`
//   query {
//     getUsers {
//       _id
//       name
//       lastName
//       email
//     }
//   }

// `

function App() {
  // ALTERACIONES DESDE AQUÍ
  // const {data,error,loading} = useQuery(usuario)
  // if (error) return <span style='color:red'>{error}</span>

  return (
    <div>
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter/>
            {/* Cambios */}
            {/* {loading 
            ? <p>Loading...</p>
            :<>
              {
                data && data.getUsers.map(usuario=>usuario.name).join(', ')
              }
              </>
            } */}
          </Layout>
        </AuthProvider>
      </Router>
    </div>
      
  );
}

export default App;
