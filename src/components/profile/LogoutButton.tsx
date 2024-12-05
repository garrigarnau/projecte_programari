import React from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full mt-6 p-4 flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
    >
      <LogOut size={20} />
      <span>Tancar sessió</span>
    </button>
  );
};