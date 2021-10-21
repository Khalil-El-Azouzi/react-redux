import React from 'react';
import './App.css';
import {Generations} from "./features/generations/Generations";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App container">
        <div className="m-3">
            <Generations/>
        </div>
    </div>
  );
}

export default App;
