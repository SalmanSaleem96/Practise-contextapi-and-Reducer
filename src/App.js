import React, { useState } from "react";
import './App.css';
import Parent from './parent'
import CounterContext from './counterContext'


function App() {
  let conterr= useState(25) 
  return (
    <CounterContext.Provider value={conterr}>
    <div>
      <Parent/>
    </div>
    </CounterContext.Provider>
)
}

export default App;
