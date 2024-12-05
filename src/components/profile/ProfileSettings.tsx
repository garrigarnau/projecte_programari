import React from 'react';
import { Bell, Shield, Languages, HelpCircle } from 'lucide-react';

const settingsItems = [
  {
    icon: <Bell size={24} />,
    title: 'Notificacions',
    description: 'Configura les alertes i recordatoris',
  },
  {
    icon: <Shield size={24} />,
    title: 'Privacitat i Seguretat',
    description: 'Gestiona la teva privacitat i seguretat',
  },
  {
    icon: <Languages size={24} />,
    title: 'Idioma',
    description: 'Canvia l\'idioma de l\'aplicació',
  },
  {
    icon: <HelpCircle size={24} />,
    title: 'Ajuda i Suport',
    description: 'Obtén ajuda sobre l\'aplicació',
  },
];

export const ProfileSettings = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      {settingsItems.map((item, index) => (
        <button
          key={index}
          className="w-full p-4 flex items-center space-x-4 hover:bg-gray-50 border-b last:border-b-0"
        >
          <div className="text-rose-600">{item.icon}</div>
          <div className="text-left">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
};