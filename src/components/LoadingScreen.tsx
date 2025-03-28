import { FC } from "react";

const LoadingScreen: FC = () => {
  return (
    <div className="loading_hangman">
      <img src="/hangman.png" alt="Pendu"/>
      <div className="loading-bar-container">
        <div className="loading-bar" />
      </div>
    </div>
  );
};

export default LoadingScreen;