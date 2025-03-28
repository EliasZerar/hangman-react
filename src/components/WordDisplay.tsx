import { useEffect, useState } from "react";

type WordDisplayProps = {
  word: string;
  guessedLetters: string[];
};

const WordDisplay = ({ word, guessedLetters }: WordDisplayProps) => {
  const [isHidden, setIsHidden] = useState(false);

  const normalize = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
