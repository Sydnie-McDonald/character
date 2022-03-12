import './Catchphrases.css';

export default function Catchphrases({
  setCatchphrase,
  setCatchphrases,
  catchphrase,
  catchphrases,
}) {
  const saveCatchphrase = () => {
    setCatchphrases((prevState) => [...prevState, catchphrase]);
    setCatchphrase('');
  };

  return (
    <div>
      Add a catch phrase
      <input
        id="catchphrase-input"
        value={catchphrase}
        onChange={(e) => setCatchphrase(e.target.value)}
      />
      <button onClick={saveCatchphrase}>Add</button>
      <div>
        <h4>Your Catchphrases</h4>
        <ul>
          {catchphrases.map((phrase) => (
            <li key={phrase}>{phrase}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}