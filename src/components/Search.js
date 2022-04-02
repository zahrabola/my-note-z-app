import { FaSearch } from "react-icons/fa";
import React from "react";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <input
        onChange={(event) => handleSearchNote (event.target.value)}
        type="text"
        placeholder="Searching ....."
      />
      <FaSearch className="search-icon" size="1.3rem" />
    </div>
  );
};

export default Search;
