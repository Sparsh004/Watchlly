import React, {useState} from 'react';
import {getAuth, signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";

const Header = () => {

const navigate = useNavigate();
const user = useSelector(store=>store.user);


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
  

  return (
    <div className = " absolute px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
     <img
      className = "w-1/6 h-1/4"
       src = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        
      alt = "netflix-logo"/>
       {user && (<div className = "flex items-center ">
        <img className = "flex  w-12 px-2" alt= "userIcon" src={user.photoURL}/>
        <button onClick={handleSignOut} className = "bg-red-600 h-8 w-20 border-1 border-black">Sign Out</button>
      </div>)
}
    </div>
  )
}

export default Header
