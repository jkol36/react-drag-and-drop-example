import React from 'react';
import logo from './logo.svg';
import Board from './components/board';
import './App.css';

function App() {
  return (
    <Board knightPosition={[0, 0]} />
  )
}

export default App;
