import React from 'react';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileSettings } from '../components/profile/ProfileSettings';
import { LogoutButton } from '../components/profile/LogoutButton';

export const Profile = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">El meu Perfil</h1>
      
      <ProfileHeader />
      <ProfileSettings />
      <LogoutButton />
    </div>
  );
};