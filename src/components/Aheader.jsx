import React, { useState } from 'react';
import { Menu, Search, User, ChevronDown, LogOut } from 'lucide-react';
import { useAuth } from '../context/auth'; // Adjust the path based on your folder structure
import { useNavigate } from 'react-router-dom';

const Aheader = ({ setAdminSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [auth, setAuth] = useAuth(); // Access auth context
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    // Clear auth state and local storage
    setAuth({
      user: null,
      token: "",
    });
    localStorage.removeItem('auth');
    // Redirect to the sign-in page
    navigate('/sign_in');
  };

  return (
    <header className="bg-white shadow-md w-full px-4 h-16 flex justify-between items-center">
      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="lg:hidden text-gray-500 focus:outline-none"
        onClick={() => setAdminSidebarOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Dashboard Title */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-xl font-bold text-gray-700">Admin Header</h1>
      </div>

      {/* Search Input */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-full py-1 px-3 text-sm focus:outline-none focus:ring hidden sm:block"
          />
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 hidden sm:block" />
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center focus:outline-none"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <User className="h-6 w-6 text-gray-700" />
            <ChevronDown className="h-4 w-4 ml-1 text-gray-700" />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1">
              <button
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                onClick={() => console.log('Go to Profile')} // Replace with actual navigation if needed
              >
                <User className="h-4 w-4 mr-2" />
                User Profile
              </button>
              <button
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                onClick={handleLogout} // Handle logout
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Aheader;
