type WrongletterProps = {
  wrongLetters: string[];
};

const Wrongletter = ({ wrongLetters }: WrongletterProps) => {
  const groupedLetters = wrongLetters.reduce<string[][]>((acc, letter, index) => {
    const rowIndex = Math.floor(index / 3);
    if (!acc[rowIndex]) acc[rowIndex] = [];
    acc[rowIndex].push(letter);
    return acc;
  }, []);

  return (
    <div className="wrong-letters">
      <h3>Lettres incorrectes :</h3>
      {groupedLetters.map((group, rowIndex) => (
        <div key={rowIndex} className="wrong-letter-row">
          {group.map((letter, index) => (
            <span key={index} className="wrong-letter">
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Wrongletter;
