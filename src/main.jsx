import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'

import Start from './Start.jsx'
import Productdetails from './Productdetails.jsx';
import Cart from './Cart.jsx';
import Begin from './Begin.jsx';




 const router = createBrowserRouter([
  {
    path: "/",
    Component: Begin,
    children:[
      {
        index:true,
        Component:Start,
      },
      {
        path:"/productdetails/:id",
        Component:Productdetails,
      },
      {
        path:"/cart",
        Component:Cart,
      }
    ]
    
  },
 
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
