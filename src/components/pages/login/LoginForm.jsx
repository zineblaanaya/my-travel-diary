import React, { useState } from 'react'
import ButtonLogin from '../../buttons/ButtonLogin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
// import bgImg from '../../../assets/background.jpg';

export default function LoginForm() {
    //state

   const [emailValue, setEmailValue] = useState("");
   const [passwordValue, setPasswordValue] = useState("");
   

   //comportements

   const handleSubmit= (event) => {
   event.preventDefault()
   alert(`Bonjour ${emailValue}`);
   console.log(`Mot de passe : ${passwordValue}`);  
   setEmailValue("")
   setPasswordValue("")
   }

   const handleEmailChange = (event) => {
    setEmailValue(event.target.value)
   }

   const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value)
   }

    return (
    
        <div className="bg-cover bg-center h-screen flex items-center justify-center " style= {{backgroundImage: 'url("/src/assets/background.jpg")'}} >
    
        <form  className=" text-white font-sans text-center flex flex-col items-center justify-center m-64 absolute" action="submit" onSubmit={handleSubmit} >
        <h1 className="font-serif lg:text-7xl md:text-6xl sm:text-4xl text-3xl my-20">My Travel Diary</h1>
        <br/>
        <div className="flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-[-20px] mt-1"/>
            <input 
            className="bg-transparent border-b-2 border-white w-64 text-left p-2 pl-8 focus:outline-none placeholder-white "
            value={emailValue} 
            onChange ={handleEmailChange} 
            type="email" 
            placeholder="email" 
            required/>
        </div>
            <br/>
            <br/>
            <br/>
            <div className="flex items-center">
            <FontAwesomeIcon icon={faLock} className="mr-[-20px] mt-1"/>
            <input 
            className=" bg-transparent border-b-2 border-white w-64 text-left p-2 pl-8 focus:outline-none placeholder-white"
            value={passwordValue} 
            onChange ={handlePasswordChange} 
            type="password" 
            placeholder="Password" 
            required/>
            </div>
            <ButtonLogin/>
        </form> 
    </div>
    )
}
