import React from 'react';
import './App.css';
import { Parent } from './Parent';
import ValueContext from './ValueContext';

function App() {
  return (

    <ValueContext.Provider value={20}>
      <div >
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
