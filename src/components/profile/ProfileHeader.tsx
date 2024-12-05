import React from 'react';
import { User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const ProfileHeader = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex items-center space-x-4">
      <div className="bg-rose-100 p-4 rounded-full">
        <User size={48} className="text-rose-600" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{user?.name}</h2>
        <p className="text-gray-600">
          {user?.userType === 'patient' && 'Pacient'}
          {user?.userType === 'family' && 'Familiar'}
          {user?.userType === 'doctor' && 'Metge'}
        </p>
      </div>
    </div>
  );
};