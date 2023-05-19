import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { pokemonSpeciesRoute } from "../../utils/baseUrl";
import { debounce } from "lodash";
import axios from "axios";
const InputBar: React.FC = () => {
  const navigate = useNavigate();
  async function search(name: string) {
    const response = await axios.get(`${pokemonSpeciesRoute}/${name}`);

    if (response.status === 200) {
      const { data } = response;
      let ID = response.data.id;

      navigate(`/pokemon/${ID}`);
    }
  }
  const debouncedSearch = useCallback(debounce(search, 600), []);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }
  return (
    <div className="flex items-center justify-center w-full">
      <input
        placeholder="Search pokemon here .."
        type="search"
        onChange={handleChange}
        className="p-3 m-2 h-10 w-60 sm:w-80 md:w-96 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default InputBar;
