import './Main.css';
import { useState } from 'react';

import Controls from '../Controls/Controls';
import Display from '../Display/Display';


export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('leg');
  const [catchphrases, setCatchphrases] = useState([]);
  const [catchphrase, setCatchphrase] = useState('');

  return (
    <main>
      <Controls setHead={setHead} setMiddle={setMiddle} setBottom={setBottom} setCatchphrase={setCatchphrase} setCatchphrases={setCatchphrases} catchphrases={catchphrases} catchphrase={catchphrase} />
      <Display head={head} middle={middle} bottom={bottom} />
    </main>
  );
}