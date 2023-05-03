import React, { useState, ChangeEvent, useEffect } from "react";
import {debounce} from "../../utils/debounce";
function InputBar() {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedValue,setDebouncedValue] = useState('');
  const handleChange = debounce((value:string)=> console.log(value),1000)
  
  
  return (
    <div>
      <input
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => handleChange(e.target.value)}

        className=" p-5 m-2 h-5 w-60 text-black font-weight-bold"
      />
    </div>
  );
}

export default InputBar;
