import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { memo } from 'react';

function App() {
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const patternRangoli = useCallback((x, y) => {
    for (let index = 0; index < y; index++) {
      if (index % parseFloat(y) === 0) {
        console.log(`---------${alpha[y]}--------- \n`)
      }
      if (index % 3 === 0) {
        console.log(`---------${alpha[y]}-${alpha[x]}-${alpha[y]}--------- \n`)
      }
      if (index % 5 === 0) {
        console.log(`---------${alpha[y]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[y]}--------- \n`)
      }
      if (index % 7 === 0) {
        console.log(`---------${alpha[y]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[y]}--------- \n`)
      }
      if (index % 9 === 0) {
        console.log(`---------${alpha[y]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[y]}--------- \n`)
      }
      if (index % 11 === 0) {
        console.log(`---------${alpha[y]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[y]}--------- \n`)
      }
      if (index % 9 === 0) {
        console.log(`---------${alpha[y]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[y]}--------- \n`)
      }
      if (index % 7 === 0) {
        console.log(`---------${alpha[y]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[y]}--------- \n`)
      }
      if (index % 5 === 0) {
        console.log(`---------${alpha[y]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[y]}--------- \n`)
      }
      if (index % 5 === 0) {
        console.log(`---------${alpha[y]}-${alpha[x]}-${alpha[x]}-${alpha[x]}-${alpha[y]}--------- \n`)
      }
      if (index % 3 === 0) {
        console.log(`---------${alpha[y]}-${alpha[x]}-${alpha[y]}--------- \n`)
      }
      if (index % y === 0) {
        console.log(`---------${alpha[y]}--------- \n`)
      }
      return index
    }
  }, [alpha])

  useEffect(() => {
    patternRangoli('j', 5)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
