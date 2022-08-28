import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeConfig from 'theme';
import RootStoreProvider from 'stores';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RootStoreProvider>
    <ThemeConfig>
      <Router>
        <App />
      </Router>
    </ThemeConfig>
  </RootStoreProvider>
);
