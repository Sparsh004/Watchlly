import React, {useState,useEffect} from 'react';
import {getAuth, signOut,onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { addUser,removeUser } from '../utils/userSlice';
import { Logo, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import logo from "../utils/images/Watchlly3.png";
import { changeLanguage } from '../utils/configSlice';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  const handleSignOut=()=>{

      // Sign-Out 
      const auth = getAuth();
      signOut(auth).then(() => {
      navigate("/");

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
    <div className = " absolute px-6 -mt-24   z-10 flex justify-between">
     <img
      className = "w-1/4 h-1/4 "
      src = {logo} 
      alt = "netflix-logo"/>
       {user && (<div className = "flex items-center ">
          { showGptSearch && <select className="p-2 m-2 bg-gray-800  text-white" onChange={handleLanguageChange}>

          {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          
        </select>}
        <button  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-6 m-4 rounded-full 
                       hover:from-blue-500 hover:to-purple-500 transition-all duration-500 ease-in-out"
                  onClick = {handleGptSearchClick}>
          {showGptSearch ? "Home":"Gpt Search"}
        </button>
        {/* <img className = "flex  w-12 px-2" alt= "userIcon" src={user?.photoURL}/> */}
        <button onClick={handleSignOut} className = "bg-blue-800 rounded-full h-8 w-20 border-1 border-black">Sign Out</button>
      </div>)
}
    </div>
  )
}

export default Header
