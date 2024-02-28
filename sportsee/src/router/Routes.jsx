// Routes.js
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../pages/Homepage/HomePage';

const RedirectToDashboard12 = () => {
  return <Navigate to="/dashboard/12" replace />;
};

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectToDashboard12 />} />
        <Route path="/dashboard/:userid" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
