import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeConfig from 'theme';
import { Provider } from 'react-redux';
import { store } from 'features/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeConfig>
        <Router>
          <App />
        </Router>
      </ThemeConfig>
    </Provider>
  </React.StrictMode>
);
