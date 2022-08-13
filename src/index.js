import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth } from './context/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Auth>
    </BrowserRouter>
  </React.StrictMode>
);
