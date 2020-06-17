import React from 'react';
import ClassComponent from './Components/ClassComponent.js';
import FuncComponent from './Components/FuncComponent.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FuncComponent/>
    </div>
  );
}

export default App;