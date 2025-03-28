import React from 'react';

interface HangmanResultProps {
  isWinner: boolean | null;
  onRestart: () => void; 
}

const HangmanResult: React.FC<HangmanResultProps> = ({ isWinner, onRestart }) => {
  if (isWinner === null) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        {isWinner ? (
          <h2>Félicitations ! Vous avez gagné ! 🎉</h2>
        ) : (
          <h2>Dommage ! Vous avez perdu. 😢</h2>
        )}
        <button onClick={onRestart}>Recommencer</button>
      </div>
    </div>
  );
};

export default HangmanResult;
