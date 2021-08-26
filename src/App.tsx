import React from 'react';
import logo from './logo.svg';
import './App.css';
import BeerList from './components/BeerList/BeerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BeerList />
        <a
          className="App-link"
          href="https://track7brewing.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Beer!
        </a>
      </header>
    </div>
  );
}

export default App;
