import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiHomeHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { pokemonSpeciesRoute } from "../../utils/baseUrl";
import { debounce } from "lodash";
import axios from "axios";
function InputBar() {
  const inputRef = useRef("");
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState([]);
  async function search(name: string) {
    const response = await axios.get(`${pokemonSpeciesRoute}/${name}`);
    console.log(response);
    if (response.status === 200) {
      let ID = response.data.id;
      navigate(`/pokemon/${ID}`);
    }
  }
  const debouncedSearch = React.useRef(
    debounce(async (criteria) => {
      await search(criteria);
    }, 1000)
  ).current;

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }
  return (
    <div className=" flex  align-middle text-justify justify-around w-full">
      <BsSearch className="mt-4 text-lg" />
      <input
        placeholder="Don't search "
        type="search"
        onChange={handleChange}
        className=" p-5 m-2 h-5 w-60 text-black font-weight-bold"
      />
      <Link to="/">
        <BiHomeHeart className="mt-4 text-xl" />
      </Link>
    </div>
  );
}

export default InputBar;
