import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Cập nhật đường dẫn
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/layout/Navbar';
import './index.css';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Navbar />
      <AppRoutes />
    </AuthProvider>
  </BrowserRouter>
);

export default App;