import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaUser, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Quản lý Thiết bị</span>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/devices"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-white hover:text-gray-200 transition duration-200"
              >
                Danh sách thiết bị
              </Link>
              <Link
                to="/my-devices"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-white hover:text-gray-200 transition duration-200"
              >
                Thiết bị của tôi
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-white hover:text-gray-200 transition duration-200"
              >
                Đăng ký
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <motion.button
              onClick={logout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaSignOutAlt className="mr-2" /> Đăng xuất
            </motion.button>
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="sm:hidden"
          >
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/devices"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-gray-800 hover:border-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Danh sách thiết bị
              </Link>
              <Link
                to="/my-devices"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-gray-800 hover:border-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Thiết bị của tôi
              </Link>
              <Link
                to="/register"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-gray-800 hover:border-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Đăng ký
              </Link>
              <button
                onClick={() => { logout(); setIsOpen(false); }}
                className="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-red-600 hover:border-gray-300"
              >
                <FaSignOutAlt className="inline mr-2" /> Đăng xuất
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;