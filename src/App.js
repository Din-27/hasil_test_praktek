import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const patternRangoli = (x, y) => {
    var n
    n = parseInt(y);
    for (let i = n; i > 0; i--) {
      for (let j = 1; j <= i - 1; j++) {
        document.write('&nbsp&nbsp');
      }

      for (let y = 1; y <= n - i + 1; y++) {
        document.write(`-${alphabet[x]}`.toLocaleLowerCase());
      }

      for (let l = 1; l <= n - i; l++) {
        document.write(`-${alphabet[x]}`.toLocaleLowerCase());
      }
      document.write('<br>:');
    }

    for (let i = 1; i <= n; i++)
    {
      for (let j = 1; j <= i; j++) {
        document.write('&nbsp&nbsp');
      }

      for (let y = 1; y <= n - i; y++) {
        document.write(`-${alphabet[x]}`.toLocaleLowerCase());
      }

      for (let l = 1; l < n - i; l++) {
        document.write(`-${alphabet[x]}`.toLocaleLowerCase());
      }
      document.write('<br>');
    }
  }

  useEffect(() => {
    patternRangoli(3, 10)
  })

  return (
    <div className="App">
      <header className="App-header">
        <div></div>
      </header>
    </div>
  );
}

export default App;
