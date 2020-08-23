import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <MovieCounter></MovieCounter>
      <MovieCounter></MovieCounter>
      <MovieCounter></MovieCounter>
  
      <header className="App-header">
      <h1>Buttom portion react</h1>
      </header>
    </div>
  );
}
function MovieCounter() {
  const [count , setCount] =  useState(0)
  const handleClick = () => setCount(count + 1)

  const headStyle = {
    border : '2px solid red',
    padding: '10px',
    margin:  '20px',
    borderRadius: '8px'
  }
  return (
    <div style ={headStyle}>
      <button onClick = {handleClick}>Add movies</button>
      <h5>Number of movies: {count} </h5>
      <MoviesDisplay movies = {count + 10}></MoviesDisplay>
      <MoviesDisplay movies = {count -1 }></MoviesDisplay>  
    </div>
  );
}
function MoviesDisplay(props) {
  return <h4>Movies i had watch: {props.movies} </h4>
}

export default App;
