// Routes.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Homepage/HomePage';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/:userid" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
