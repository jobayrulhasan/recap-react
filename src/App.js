import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <header className="App-header">
      
      <h1>commit</h1>
      
      </header>
    </div>
  );
}
function Nayok() {
  const headStyle = {
    border : '2px solid red',
    padding: '10px',
    margin:  '20px',
    borderRadius: '8px'
  }
  return (
    <div style ={headStyle}>
      <h1>Heading of the page</h1>
      <h3>little portion</h3>
    </div>
  );
}

export default App;
