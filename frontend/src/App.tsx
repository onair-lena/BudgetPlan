import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<h2>Login</h2>}></Route>
      <Route path="/" element={<h2>Home</h2>}></Route>
    </Routes>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
