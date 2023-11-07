import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import AuthContext from './AuthContext/AuthContext.jsx'
import Login from './Authentication/Login/Login.jsx'
import Logout from './Authentication/Logout/Logout.jsx'
import Register from './Authentication/Register/Register.jsx'
import Reset from './Authentication/Reset/Reset.jsx'
import './index.css'
import Main from './LAYOUT/Main.jsx'
import About from './Optional/about.jsx'
import Blog from './Optional/Blog.jsx'
import Contact from './Optional/Contact.jsx'
import ErrorPage from './Optional/ErrorPage.jsx'
import ChefId from './PAGES/ChefId/ChefId.jsx'
import CardDetails from './PAGES/Home/CardDetails/CardDetails.jsx'
import Home from './PAGES/Home/Home/Home.jsx'
import PrivateRoute from './PAGES/PrivateRoute/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Navigate to="/recipe"></Navigate>
      },
      {
        path: '/recipe',
        element: <Home />,
        loader: () => fetch(`https://chef-server-2.vercel.app/recepi`)
      },
      {
        path: '/recipe/:id',
        element: <PrivateRoute><CardDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-server-2.vercel.app/recepi/${params.id}`)
      },
      {
        path: "chef/:id",
        element: <ChefId />,
        loader: ({ params }) => fetch(`https://chef-server-2.vercel.app/chef/${params.id}`)
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/logout',
        element: <Logout />
      },
      {
        path: 'reset',
        element: <Reset />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: '/*',
        element: <ErrorPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>,
)
