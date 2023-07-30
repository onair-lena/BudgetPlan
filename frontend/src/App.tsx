import { Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import React from 'react';
import './App.css';
import { Login } from './pages/login/login';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#101fdc',
        colorSuccess: '#13790d',
        colorWarning: '#FADB14',
        colorError: '#e82b18',
      },
    }}
  >
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<h2>Home</h2>}></Route>
    </Routes>
  </ConfigProvider>
);

export default App;
