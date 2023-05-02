import React, { useState } from 'react'
import debounce from "../../utils/debounce"
function InputBar() {
   const [searchInput,setSearchInput] =useState('');
   const handleChange= (event )=>{
    setSearchInput(event.target.value);
   }
  return (
    <div>
      <input placeholder='Search...' value={searchInput} onChange={handleChange}/>
    </div>
  )
}

export default InputBar;
