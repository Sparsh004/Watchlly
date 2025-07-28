import React, {useState,useEffect} from 'react';
import {getAuth, signOut,onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { addUser,removeUser } from '../utils/userSlice';
import { Logo } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import Watchlly4 from "../utils/images/Watchlly.png";

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
  
  const handleGptSearchClick = ()=>{
    // Toggle GPT Search Button
    dispatch(toggleGptSearchView());


  }
  return (
    <div className = " absolute px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
     <img
      className = "w-1/6 h-1/4 "
      src = {Logo} 
      alt = "netflix-logo"/>
       {user && (<div className = "flex items-center ">
        <button  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-6 m-4 rounded-full 
                       hover:from-blue-500 hover:to-purple-500 transition-all duration-500 ease-in-out"
                  onClick = {handleGptSearchClick}>
          GPT Search
        </button>
        {/* <img className = "flex  w-12 px-2" alt= "userIcon" src={user?.photoURL}/> */}
        <button onClick={handleSignOut} className = "bg-blue-300 rounded-full h-8 w-20 border-1 border-black">Sign Out</button>
      </div>)
}
    </div>
  )
}

export default Header
