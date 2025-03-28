type Hangman_design = {
  attemptsLeft: number;
};

const HangmanDesign = ({ attemptsLeft }: Hangman_design) => {
  return (
    <div className="text-center">
      <div className="hangman-design-container">
        <svg width="200" height="250">

          {attemptsLeft < 10 && <line x1="20" y1="230" x2="120" y2="230" stroke="black" strokeWidth="5" />}
          {attemptsLeft < 9 && <line x1="70" y1="230" x2="70" y2="30" stroke="black" strokeWidth="5" />}
          {attemptsLeft < 8 && <line x1="70" y1="30" x2="150" y2="30" stroke="black" strokeWidth="5" />}
          {attemptsLeft < 7 && <line x1="150" y1="30" x2="150" y2="50" stroke="black" strokeWidth="3" />}
          {attemptsLeft < 6 && <circle cx="150" cy="70" r="15" stroke="black" strokeWidth="3" fill="none" />}
          {attemptsLeft < 5 && <line x1="150" y1="85" x2="150" y2="140" stroke="black" strokeWidth="3" />}
          {attemptsLeft < 4 && <line x1="150" y1="100" x2="130" y2="120" stroke="black" strokeWidth="3" />}
          {attemptsLeft < 3 && <line x1="150" y1="100" x2="170" y2="120" stroke="black" strokeWidth="3" />}
          {attemptsLeft < 2 && <line x1="150" y1="140" x2="130" y2="180" stroke="black" strokeWidth="3" />}
          {attemptsLeft < 1 && <line x1="150" y1="140" x2="170" y2="180" stroke="black" strokeWidth="3" />}
        </svg>
      </div>
    </div>
  );
};


export default HangmanDesign;
