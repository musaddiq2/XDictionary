import { useState } from "react";


export default function App() {
  const [dataWords, setDataWords] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ]);
  const [searchWord, setSearchWord] = useState("");
  const [displayMeaning, setDisplayMeaning] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //const { name, value } = e.target;
    const foundWord = dataWords.find(
      (entry) => entry.word.toLowerCase() === searchWord.toLowerCase()
    );
    if (foundWord) {
      setDisplayMeaning(foundWord.meaning);
    } else {
      setDisplayMeaning("Word not found in the dictionary.");
    }
  };
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a word .."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          name="searchWord"
        />
        <button type="submit">Search</button>
      </form>
      <h4>Defination:</h4>
      <p>{displayMeaning}</p>
    </div>
  );
}
