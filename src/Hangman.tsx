import { useEffect, useState } from "react";
import { fetchData } from "./Api";
import Hangman_design from "./components/Hangman_design";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import HangmanResult from "./components/Hangman_result";
import Wrongletter from "./components/Wrongletter";

const Hangman = () => {
  const [word, setWord] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState<number>(10); 
  const [message, setMessage] = useState<string>("");
  const [isWinner, setIsWinner] = useState<boolean | null>(null);

  const normalize = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  useEffect(() => {
    const fetchWord = async () => {
      const data = await fetchData();
      if (data && data.word) {
        const fullWord = data.word;  
        console.log("Mot récupéré depuis l'API :", fullWord);
  
        const startIdx = Math.floor(Math.random() * (fullWord.length - 3));
        const selectedWord = fullWord.slice(startIdx, startIdx + 5);
  
        const wordsArray = fullWord.split(" ");
        const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  
        const finalWord = randomWord.length > 3 ? randomWord : selectedWord;
        console.log("Mot sélectionné :", finalWord);
  
        setWord(finalWord);
        setGuessedLetters([]);
        setWrongLetters([]);
        setAttemptsLeft(10); 
        setMessage("");
        setIsWinner(null);
      }
    };
  
    fetchWord();
  }, []);
  

  const handleLetterClick = (letter: string) => {
    if (guessedLetters.includes(letter) || attemptsLeft === 0) return;

    setGuessedLetters([...guessedLetters, letter]);

    const normalizedWord = normalize(word.replace(/\s/g, "").replace(/-/g, ""));
    const normalizedGuessed = [...guessedLetters, letter].map(normalize);

    if (normalizedWord.split("").every((letter) => normalizedGuessed.includes(letter))) {
      setIsWinner(true);
    } else if (!normalizedWord.includes(normalize(letter))) {
      setAttemptsLeft(attemptsLeft - 1);
      setWrongLetters([...wrongLetters, letter]);
    }
  };

  useEffect(() => {
    const normalizedWord = normalize(word.replace(/\s/g, "").replace(/-/g, ""));
    const normalizedGuessed = guessedLetters.map(normalize);

    if (normalizedWord.split("").every((letter) => normalizedGuessed.includes(letter))) {
      setIsWinner(true);
    } else if (attemptsLeft === 0) {
      setIsWinner(false);
    }
  }, [guessedLetters, attemptsLeft, word]);

  return (
    <div className="hangman-container">
      <Wrongletter wrongLetters={wrongLetters} />
      <h1 className="hangman-title">Jeu du Pendu</h1>
      <div className="hangman-middle">
        <Hangman_design attemptsLeft={attemptsLeft} />
        <WordDisplay word={word} guessedLetters={guessedLetters} />
      </div>
      <div className="hangman-keyboard">
        <Keyboard guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
      </div>
      <p
        className="hangman-message"
        style={{ color: attemptsLeft > 0 ? "green" : "red" }}
      >
        {message}
      </p>
      <HangmanResult isWinner={isWinner} />
    </div>
  );
};

export default Hangman;
