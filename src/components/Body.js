import React, { useEffect } from 'react'
import {createBrowserRouter, useNavigate} from "react-router-dom";
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Body = () => {
  
 

  const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:"/Browse",
            element:<Browse/>,
        }
    ]);


  
  return (
    <div>
      <RouterProvider router= {appRouter}/>
    </div>
  )
}

export default Body
