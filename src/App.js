import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';

import RiffBot  from './Riffbot';

function App() {
  return (
    <div className="App">
      <header>R I F F D E M O N</header>
      <RiffBot></RiffBot>
      <footer>Built with <a href="https://tonejs.github.io/" target="_blank">Tone.js</a> and <a href="https://jtab.tardate.com/" target="_blank">jTab</a></footer>
    </div>
  );
}

export default App;
