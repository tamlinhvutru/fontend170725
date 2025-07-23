import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MyDevicesPage from '../pages/MyDevicesPage';
import DeviceListPage from '../pages/DeviceListPage';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/my-devices" element={<PrivateRoute><MyDevicesPage /></PrivateRoute>} />
    <Route path="/devices" element={<PrivateRoute><DeviceListPage /></PrivateRoute>} />
    <Route path="/" element={<LoginPage />} />
  </Routes>
);

export default AppRoutes;