import React from 'react';

interface HangmanResultProps {
  isWinner: boolean | null; 
}

const HangmanResult: React.FC<HangmanResultProps> = ({ isWinner }) => {
  if (isWinner === null) {
    return null; 
  }

  return (
    <div>
      {isWinner ? (
        <h2>Félicitations ! Vous avez gagné ! 🎉</h2>
      ) : (
        <h2>Dommage ! Vous avez perdu. 😢</h2>
      )}
    </div>
  );
};

export default HangmanResult;
