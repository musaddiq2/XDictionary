import React from "react";

const Search = ({ searchTerm, onSearch }) => {
  return (
    <div className="search">
      <label htmlFor="searchInput">Search for a word:</label>
<input
  type="text"
  id="searchInput"
  placeholder="Search for a word"
  value={searchTerm}
  onChange={(e) => onSearch(e.target.value)}
/>
<button onClick={() => onSearch(searchTerm)}>Search</button>
    </div>
  );
};

export default Search;