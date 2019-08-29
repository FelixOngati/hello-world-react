import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter/>
      {/*<Greet name='Vishwas' heroName='Batman'>*/}
      {/*  <p>This is a paragraph</p>*/}
      {/*</Greet>*/}
      {/*<Greet name='Fegati' heroName='Superman'>*/}
      {/*  <button>Action</button>*/}
      {/*</Greet>*/}
      {/*<Greet name='Bruce' heroName='Wonder Woman'/>*/}

      {/* <Welcome name='Vishwas' heroName='Batman'>*/}
      {/*  <p>This is a paragraph</p>*/}
      {/*</Welcome>*/}
      {/*<Welcome name='Fegati' heroName='Superman'>*/}
      {/*  <button>Action</button>*/}
      {/*</Welcome>*/}
      {/*<Welcome name='Bruce' heroName='Wonder Woman'/>*/}
      {/*<Hello/>*/}
    </div>
  );
}

export default App;
