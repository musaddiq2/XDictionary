import React, { useState } from 'react';

const App = () => {
  const initialDictionary = [
    { word: 'React', meaning: 'A JavaScript library for building user interfaces.' },
    { word: 'Component', meaning: 'A reusable building block in React.' },
    { word: 'State', meaning: 'An object that stores data for a component.' },
  ];

  const [dictionary, setDictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    const searchTermLower = searchTerm.toLowerCase();
    const foundWord = dictionary.find((entry) => entry.word.toLowerCase() === searchTermLower);

    if (foundWord) {
      setDefinition(foundWord.meaning);
      setErrorMessage('');
    } else {
      setDefinition('');
      setErrorMessage('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Enter a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {definition && (
        <div>
          <h2>Definition:</h2>
          <p>{definition}</p>
        </div>
      )}

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default App;
