import { useState } from "react";

type WordDisplayProps = {
  word: string;
  guessedLetters: string[];
};

const WordDisplay = ({ word, guessedLetters }: WordDisplayProps) => {
  const [isHidden] = useState(true); 

  const normalize = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");


  return (
    <div className="word-display">
      <p className="word-display-word">
        {!isHidden
          ? word.split("").map((letter) => {
              if (letter === " " || letter === "-") {
                return letter; 
              }
              return letter + " "; 
            }).join("")
          : word
              .split("")
              .map((letter) =>
                letter === " " || letter === "-"
                  ? letter
                  : guessedLetters.some((guessed) => normalize(guessed) === normalize(letter))
                  ? letter
                  : "_"
              )
              .join(" ")}
      </p>
    </div>
  );
};

export default WordDisplay;
