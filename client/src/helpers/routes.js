const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  account: '/account',
  Projects: '/Projects',
  Project:(projectId)=> projectId?`/Projects/:${projectId}`: '/projects/:projectId',
  users: {
    admin: '/admin/users',
    lider: '/lider/users'
  }
  }

  export default routes;