import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeConfig from 'theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeConfig>
      <Router>
        <App />
      </Router>
    </ThemeConfig>
  </React.StrictMode>
);
