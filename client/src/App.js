import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [randomColor, setRandomColor] = useState('white');

  const fetchRandomColor = () => {
    fetch('http://localhost:3001/random-color')
      .then(res => res.json())
      .then(data => {
        setRandomColor(data.data);
      })
  }

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: randomColor }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => fetchRandomColor()}>
          Get random color
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
