import React, { useState } from 'react';
import './App.css';
import { Parent } from './Parent';
import ValueContext from './ValueContext';

function App() {
  let value=useState(5)
  return (

    <ValueContext.Provider value={value}>
      <div >
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
