import React, { useState, ChangeEvent, useEffect } from "react";
import { debounce } from "../../utils/debounce";
import { BsSearch } from "react-icons/bs";
import { BiHomeHeart } from "react-icons/bi";
import {Link} from "react-router-dom"
function InputBar() {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const handleChange = debounce((value: string) => console.log(value), 1000);

  return (
    <div className=" flex justify-center align-middle text-justify">
      <BsSearch className="mt-4 text-lg" />
      <input
        placeholder="Don't search "
        value={searchInput}
        onChange={(e) => handleChange(e.target.value)}
        className=" p-5 m-2 h-5 w-60 text-black font-weight-bold"
      />
      <Link to="/">
      <BiHomeHeart className="mt-4 text-xl" />
      </Link>
    </div>
  );
}

export default InputBar;
