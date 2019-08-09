import React from 'react';
import './App.css';
import Paragraphe from "./paragraphe/index"
import Menu from "./menu/menu"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <Paragraphe/>
      </header>
    </div>
  );
}

export default App;
