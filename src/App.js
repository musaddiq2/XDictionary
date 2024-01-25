import React, { useState } from "react";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

const Word = ({ word, meaning }) => {
  return (
    <div className="word">
      <h3>{word}</h3>
      <p>Definition: {meaning}</p>
    </div>
  );
};

function App() {
  const [definition, setDefinition] = useState("");

  const handleSearch = (search) => {
    const word = dictionary.find(
      (item) => item.word.toLowerCase() === search.toLowerCase()
    );

    if (word) {
      setDefinition(word.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <Search onSearch={handleSearch} />
      <Word word={definition !== "" ? definition : "Enter a word to search"} />
    </div>
  );
}

export default App;
