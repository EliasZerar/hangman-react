import { useEffect } from "react";

type KeyboardProps = {
  guessedLetters: string[];
  onLetterClick: (letter: string) => void;
};

const Keyboard = ({ guessedLetters, onLetterClick }: KeyboardProps) => {
  const rows = [
    "azertyuiop".split(""),
    "qsdfghjklm".split(""),
    "wxcvbn".split("")
  ];

  const handleLetterClick = (letter: string) => {
    onLetterClick(letter.toLowerCase());
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const letter = event.key.toLowerCase();
      if (/^[a-z]$/.test(letter) && !guessedLetters.includes(letter)) {
        onLetterClick(letter);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guessedLetters, onLetterClick]);

  return (
    <div className="keyboard-container">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((letter) => (
            <button
              key={letter}
              className="keyboard-button"
              onClick={() => handleLetterClick(letter)} 
              disabled={guessedLetters.includes(letter.toLowerCase())} 
            >
              {letter.toUpperCase()} 
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
