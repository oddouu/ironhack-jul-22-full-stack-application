import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProviderWrapper } from './context/theme';
import { AuthProviderWrapper } from './context/authentication';

// We're just ensuring that this script is executed
import './internationalization';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProviderWrapper>
        <AuthProviderWrapper>
          <App />
        </AuthProviderWrapper>
      </ThemeProviderWrapper>
    </Router>
  </React.StrictMode>
);
