import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'

import Start from './Start.jsx'
import Productdetails from './Productdetails.jsx';




 const router = createBrowserRouter([
  {
    path: "/",
    Component: Start,
  },
  {
    path:"/productdetails/:id",
    Component:Productdetails,
  }
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
