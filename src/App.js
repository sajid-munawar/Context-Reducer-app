import React, { useContext, useState } from 'react';
import './App.css';
import { Parent } from './Parent';
import ValueContext from './ValueContext';

function App() {
  let value=useState(45)
  return (

    <ValueContext.Provider value={value}>
      <div >
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
