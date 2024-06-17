import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

// Routeur de l'application
const router = createBrowserRouter([
  // 1ere route
  {
    path: "/",
    element: <Home/>,
  },
  // 2em route
  {
    path: "/skills",
    element: <Skills/>,
  },
  // 3em route
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
