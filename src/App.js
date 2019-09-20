import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"
import ParentComponent from "./components/ParentComponent"
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheets from "./components/StyleSheets";
import Inline from "./components/Inline";

import './appStyles.css'
import styles from './appStyles.module.css'
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";

class App extends Component {
  render(){
      return (
    <div className="App">
        <LifecycleA/>
        {/*<Form/>*/}
        {/*<h1 className='error'>Error</h1>*/}
        {/*<h1 className={styles.success}>Success</h1>*/}
        {/*<Inline/>*/}
        {/*<StyleSheets primary={false}/>*/}
      {/*<NameList/>*/}
      {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/*<EventBind/>*/}
        {/*<FunctionClick/>*/}
        {/*<ClassClick/>*/}
      {/*<Counter/>*/}
      {/*<Greet name='Vishwas' heroName='Batman'>*/}
      {/*  <p>This is a paragraph</p>*/}
      {/*</Greet>*/}
      {/*<Greet name='Fegati' heroName='Superman'>*/}
      {/*  <button>Action</button>*/}
      {/*</Greet>*/}
      {/*<Greet name='Bruce' heroName='Wonder Woman'/>*/}

       {/*<Welcome name='Vishwas' heroName='Batman'>*/}
      {/*  <p>This is a paragraph</p>*/}
      {/*</Welcome>*/}
      {/*<Welcome name='Fegati' heroName='Superman'>*/}
      {/*  <button>Action</button>*/}
      {/*</Welcome>*/}
      {/*<Welcome name='Bruce' heroName='Wonder Woman'/>*/}
      {/*<Hello/>*/}
    </div>
  )
  }
}

export default App;
