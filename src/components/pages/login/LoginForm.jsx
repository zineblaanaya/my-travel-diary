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
        <form action="submit" onSubmit={handleSubmit} >
        <h1>Bienvenue chez Travel Diary</h1>
        <br/>
        <h2>Connecte-toi !</h2>
            <input 
            value={inputValue} 
            onChange ={handleChange} 
            type="text" 
            placeholder="Entrez votre nom ..." 
            required/>
            <button>Acceder à votre espace</button>   
        </form>
    )
}
