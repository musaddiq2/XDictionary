import React, { useState } from "react";
import Search from "./Search";
import Word from "./Word";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = (search) => {
    setSearchTerm(search); // Update searchTerm immediately
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
      <h1>XDictionary</h1>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <Word word={searchTerm} meaning={definition} />
    </div>
  );
}

export default App;
