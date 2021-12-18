
const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    account: '/account',
    projects: '/projects',
    InscriptionPage: '/inscription',
    project: (projectId)=> projectId ? `/projects/:${projectId}` : '/projects/:projectId',
    users: {
        admin: '/admin/users',
        lider: '/lider/users'
      }
      }

export default routes;