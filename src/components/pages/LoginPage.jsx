import React from 'react'
import { useState } from 'react'

export default function LoginPage() {
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


    //affichage(render)
    return (
    <>
        <h1>Bienvenue chez Travel Diary</h1>
        <br/>
        <h2>Connecte-toi !</h2>
        <form action="submit" onSubmit={handleSubmit} >
            <input 
            value={inputValue} 
            onChange ={handleChange} 
            type="text" 
            placeholder="Entrez votre nom ..." 
            required/>
            <button>Acceder à votre espace</button>   
        </form>
    </>
    )
}
