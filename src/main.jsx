import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import { HelmetProvider } from 'react-helmet-async';  // import HelmetProvider
createRoot(document.getElementById('root')).render(

  <HelmetProvider>
    <Router>
      <App />
    </Router></HelmetProvider>,
);
