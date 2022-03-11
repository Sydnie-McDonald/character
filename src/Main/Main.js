import './Main.css';
import { useState } from 'react';

import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import Catchphrases from '../Catchphrases/Catchphrases';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('leg');
  const [catchphrases, setCatchphrases] = useState([]);
  const [catchphrase, setCatchphrase] = useState('');

  return (
    <main>
      <Controls setHead={setHead} setMiddle={setMiddle} setBottom={setBottom} />
      <Display head={head} middle={middle} bottom={bottom} />
      <Catchphrases
        setCatchphrase={setCatchphrase}
        setCatchphrases={setCatchphrases}
        catchphrase={catchphrase}
        catchphrases={catchphrases}
      />
    </main>
  );
}