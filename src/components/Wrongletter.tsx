type WrongletterProps = {
  wrongLetters: string[];
};

const Wrongletter = ({ wrongLetters }: WrongletterProps) => {
  return (
    <div className="wrong-letters">
      <h3>Lettres incorrectes :</h3>
      <p>{wrongLetters.join(", ")}</p>
    </div>
  );
};

export default Wrongletter;
