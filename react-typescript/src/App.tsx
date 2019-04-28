import * as React from 'react';
import './App.css';
import MyClass from "./components/MyClass";


import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
      
      <MyClass name={'techsith'} />


      </div>
    );
  }
}

export default App;
