import React, { useState } from 'react'

export default function LoginForm() {
    //state

   const [inputValue, setInputValue] = useState("")
   

   //comportements

   const handleSubmit= (event) => {
   event.preventDefault()
   alert(`Bonjour ${inputValue}`)  
   setInputValue("")
   }

   const handleChange = (event) => {
   setInputValue(event.target.value)
   }

    return (
        <div>
        <form  className=" text-center mx-8 my-8 "action="submit" onSubmit={handleSubmit} >
        <h1 >Bienvenue chez Travel Diary</h1>
        <br/>
        <h2 className="bg-green-300 ">Connecte-toi !</h2>
            <input 
            value={inputValue} 
            onChange ={handleChange} 
            type="text" 
            placeholder="Entrez votre nom ..." 
            required/>
            <button>Acceder à votre espace</button>   
        </form>
        </div>
    )
}
