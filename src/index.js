<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth } from './context/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Auth>
      <App />
    </Auth>
>>>>>>> 25f6c951b9cf1d6d7fd48bd574f5fbde8bb37773
=======
    <BrowserRouter>
      <Auth>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Auth>
    </BrowserRouter>
>>>>>>> ff70b185a17a53426d533c66338301bc01f5408e
  </React.StrictMode>
);
