import React from "react";
import { useState } from "react";

const SearchBar = ({onSearch}) => {

   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
   }
   

   return (
        <div className="SearchBar">
           <input type="search" onChange= {handleChange} value={id}/>
           <button onClick={() => {onSearch(id); setId('') }}>
              AGREGAR
           </button>
        </div>
     )
}

export default SearchBar