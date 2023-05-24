import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiHomeHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { pokemonSpeciesRoute } from "../../utils/baseUrl";
import { debounce } from "lodash";
import axios from "axios";
const InputBar: React.FC = () => {
  const navigate = useNavigate();
  async function search(name: string) {
    const response = await axios.get(`${pokemonSpeciesRoute}/${name}`);

    if (response.status === 200) {
      let ID = response.data.id;
      navigate(`/pokemon/${ID}`);
    }
  }
  const debouncedSearch = useCallback(debounce(search, 600), []);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }
  return (
    <div className=" flex  align-middle text-justify justify-around w-full">
      <input
        placeholder="Don't search "
        type="search"
        onChange={handleChange}
        className=" p-5 m-2 h-5 w-60 text-black font-weight-bold"
      />
    </div>
  );
};

export default InputBar;
