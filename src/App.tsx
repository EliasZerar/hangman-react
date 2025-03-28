import { useState, useEffect } from "react";
import Hangman from "./Hangman";
import LoadingScreen from "./components/LoadingScreen"; 

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <LoadingScreen /> : <Hangman />}
    </div>
  );
};

export default App;