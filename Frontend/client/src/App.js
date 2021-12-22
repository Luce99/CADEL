import React from 'react'
import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/AuthProvider';
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from './components/layouts/Layout'
import { ApolloProvider } from '@apollo/client';


function App() {

  return (
    <div>
      <ApolloProvider>
      <Router>
        <AuthProvider>
        <Layout>
            <AppRouter/>
        </Layout>
        </AuthProvider>
      </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;

