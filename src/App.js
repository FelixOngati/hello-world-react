import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name='Vishwas' heroName='Batman'/>
      <Greet name='Fegati' heroName='Superman'/>
      <Greet name='Bruce' heroName='Wonder Woman'/>
      {/*<Welcome/>*/}
      {/*<Hello/>*/}
    </div>
  );
}

export default App;
