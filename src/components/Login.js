import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [IsSignInForm,setIsSigInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSigInForm(!IsSignInForm);
    };

  return (
    <div>
      <Header/>
      <div className = "absolute"> 
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg" alt = "watchlly-background">
       </img>
      </div>
       <form className = " absolute bg-black w-1/3 h-auto my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"> 
       
            <h1 className = "font-bold text-white text-3xl py-5 px-10">{IsSignInForm? "Sign In" : "Sign Up"}</h1>
            {!IsSignInForm && <input type = "text" placeholder = "User Name " className = " flex justify-self-center p-3 m-4 w-3/4 bg-gray-700"/>}
            <input type = "text" placeholder = "Email Address " className = " flex justify-self-center p-3 m-4 w-3/4 bg-gray-700"/>
            
            <input type="password" placeholder ="password" className = " flex justify-self-center p-3 m-4 w-3/4 bg-gray-700" />
            <button className = " flex mx-auto items-center justify-center p-4 m-4 bg-red-600 rounded-lg w-3/4 ">{IsSignInForm? "Sign-In" : "Sign-Up"}</button>
            <p className = "p-2 m-2 hover:underline cursor-pointer" onClick = {toggleSignInForm}>{IsSignInForm? "New to Watchlly? Sign Up now and explore the world of Cinema":"Already a Watchlly Member? Sign-In"}</p>
        </form>
    </div>
  )
}

export default Login
