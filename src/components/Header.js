import React, {useState,useEffect} from 'react';
import {getAuth, signOut,onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { addUser,removeUser } from '../utils/userSlice';
import { Logo } from '../utils/constant';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();

  const handleSignOut=()=>{

      // Sign-Out 
      const auth = getAuth();
      signOut(auth).then(() => {
      navigate("/");
      console.log(auth);
      }).catch((error) => {
      // An error happened.
      navigate("/error");
      });

  };

    useEffect(()=>{
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      // User is signed in, see docs for a list of available properties
        const {uid,email,displayName, photoURL} = user.uid;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate('/Browse')
      
      } else {
      // User is signed out
        dispatch(removeUser());
        navigate('/')
      
    }
  });
    // Unsubscribe when component will unMount
    return ()=> unsubscribe();

  },[]);
  

  return (
    <div className = " absolute px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
     <img
      className = "w-1/6 h-1/4"
       src = {Logo}
        
      alt = "netflix-logo"/>
       {user && (<div className = "flex items-center ">
        <img className = "flex  w-12 px-2" alt= "userIcon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className = "bg-red-600 h-8 w-20 border-1 border-black">Sign Out</button>
      </div>)
}
    </div>
  )
}

export default Header
