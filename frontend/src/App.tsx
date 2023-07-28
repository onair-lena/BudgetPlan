import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import { Login } from './pages/login/login';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<h2>Home</h2>}></Route>
    </Routes>
  );
}

export default App;
