import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const mobilePhones = ['Modern','Less Modern','Poor Modern','Updated']
  return (
    <div className="App">
      {/* this is the another way 
      <Nayok name = 'Mobile phone'></Nayok>
      <Nayok name = 'Cell phone'></Nayok>
      <Nayok name = 'Tele phone'></Nayok>
      <Nayok name = 'Modern phone'></Nayok> */}

      <Nayok name = {mobilePhones[3]}></Nayok>
      <Nayok name = {mobilePhones[0]}></Nayok>
      <Nayok name = {mobilePhones[1]}></Nayok>
      <Nayok name = {mobilePhones[2]}></Nayok>
     
      <header className="App-header">
      
      <h1>commit</h1>
      
      </header>
    </div>
  );
}
function Nayok(props) {
  // Any kinds of name is valid in the position of props.it's action is called props only
console.log(props)
  const headStyle = {
    border : '2px solid red',
    padding: '10px',
    margin:  '20px',
    borderRadius: '8px'
  }
  return (
    <div style ={headStyle}>
      <h1>Name of the head: {props.name}</h1>
      <h3>Heading of the page</h3>
      <h5>little portion</h5>
    </div>
  );
}

export default App;
