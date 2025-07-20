import React, { useEffect } from 'react'
import {createBrowserRouter} from "react-router-dom";
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux";
import { addUser,removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
 

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

  useEffect(()=>{
    const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const {uid,email,displayName, photoURL} = user.uid;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      
      
    } else {
      // User is signed out
      dispatch(removeUser());
      
    }
  });
  },[]);
  
  return (
    <div>
      <RouterProvider router= {appRouter}/>
    </div>
  )
}

export default Body
