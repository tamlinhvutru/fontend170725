import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Cập nhật đường dẫn

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="bg-blue-500 p-4 text-white shadow-md">
      <ul className="flex space-x-6">
        <li><Link to="/devices" className="hover:underline">Danh sách thiết bị</Link></li>
        <li><Link to="/my-devices" className="hover:underline">Thiết bị của tôi</Link></li>
        <li><Link to="/register" className="hover:underline">Đăng ký</Link></li>
        <li>
          <button onClick={logout} className="hover:underline">
            Đăng xuất
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;