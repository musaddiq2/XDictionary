import React from "react";

const Word = ({ word, meaning }) => {
  return (
    <div className="word">
      <h3>{word}</h3>
      <p>{meaning}</p>
    </div>
  );
};

export default Word;