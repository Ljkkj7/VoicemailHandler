import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import SignupForm from './Signup';
import Navbar from './navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
