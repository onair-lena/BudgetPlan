import { Navigate, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import React, { useContext } from 'react';
import './App.css';

import { Context } from '.';
import UserStore from './store/UserStore';
import { privateRoutes, publicRoutes } from './routes/routes';

interface ContextType {
  user: UserStore;
}

const App: React.FC = () => {
  const { user } = useContext(Context) as ContextType;

  return (
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
        {user.isAuth &&
          privateRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </ConfigProvider>
  );
};

export default App;
