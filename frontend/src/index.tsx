import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

import UserStore from './store/UserStore';

interface ContextType {
  user: UserStore;
}
const userStore = new UserStore();
export const Context = React.createContext<ContextType>({} as ContextType);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider value={{ user: userStore }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);
