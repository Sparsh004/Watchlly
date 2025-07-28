import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import { getAuth, createUserWithEmailAndPassword ,  updateProfile } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Background,User_Avatar } from '../utils/constant';
import GptBackground from "../utils/images/GptBackground.png"


const Login = () => {

    const [IsSignInForm,setIsSigInForm] = useState(true);
    const [ErrorMessage,setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const UserName = useRef(null);


    const toggleSignInForm = ()=>{
        setIsSigInForm(!IsSignInForm);
    };

    const handleValidation = (event)=>{
        // Validate the form data 
        event.preventDefault();

        // console.log(email.current.value);
        // console.log(password.current.value);

        const message  = checkValidData(email.current.value,password.current.value,UserName);
        setErrorMessage(message);

        // Sign-In/Sign-Up

        if(message) return;

        // Sign-In/Sign-Up Logic
        if(!IsSignInForm){
            // Sign-Up Logic
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                displayName: UserName, photoURL: User_Avatar
                }).then(() => {
                
                    const {uid,email,displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                
                console.log(user);
                }).catch((error) => {
                // An error occurred
                setErrorMessage(error);
                });
                // console.log(user);
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+errorMessage)
                // ..
            });

        }
        else{
            // Sign-In Logic
            const auth = getAuth(); 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+errorMessage);
            });
        }

      



    }

  return (
    <div>
      <Header/>
      <div className = "absolute "> 
        <img src = {Background} alt = "watchlly-background">
       </img>
      </div>
       <div  className = " absolute bg-black w-1/3 h-auto my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"> 
       
            <h1 className = "font-bold text-white text-3xl py-5 px-10">{IsSignInForm? "Sign In" : "Sign Up"}</h1>
            {!IsSignInForm && <input  id="user-name" type = "text" placeholder = "UserName " className = " flex justify-self-center p-3 m-4 w-3/4 bg-gray-700"/>}
            <input id="email-input" ref = {email} type = "text" placeholder = "Email Address " className = " flex justify-self-center p-3 m-4 w-3/4 bg-gray-700"/>
            <input id="password-input" ref= {password} type="password" placeholder ="password" className = " flex justify-self-center p-3 m-4 w-3/4 bg-gray-700" />
            <p className = "text-red-400 p-2 m-2 font-bold">{ErrorMessage}</p>

            <button onSubmit={(event)=>event.preventDefault()}  className = " flex mx-auto items-center justify-center p-4 m-4 bg-red-600 rounded-lg w-3/4 " onClick = {handleValidation}>
            {IsSignInForm? "Sign-In" : "Sign-Up"}</button>

            <p className = "p-2 m-2 hover:underline cursor-pointer" onClick = {toggleSignInForm}>{IsSignInForm? "New to Watchlly? Sign Up now and explore the world of Cinema":"Already a Watchlly Member? Sign-In Now"}</p>
        </div>
    </div>
  )
}

export default Login
