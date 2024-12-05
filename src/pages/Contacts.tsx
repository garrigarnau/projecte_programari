import React from 'react';
import { Phone, Video, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const contacts = [
  { id: 1, name: 'Dr. Maria López', type: 'doctor', specialty: 'Metge de capçalera' },
  { id: 2, name: 'Anna Garcia', type: 'family', relation: 'Filla' },
  { id: 3, name: 'Dr. Josep Martí', type: 'doctor', specialty: 'Cardiòleg' },
  { id: 4, name: 'Pere Garcia', type: 'family', relation: 'Fill' },
];

export const Contacts = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Els meus Contactes</h1>
      
      <div className="grid gap-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">{contact.name}</h2>
              <p className="text-gray-600">
                {contact.type === 'doctor' ? contact.specialty : `Familiar - ${contact.relation}`}
              </p>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-2 text-gray-600 hover:text-rose-600 rounded-full hover:bg-rose-50">
                <Phone size={24} />
              </button>
              <Link 
                to="/video-call" 
                className="p-2 text-gray-600 hover:text-rose-600 rounded-full hover:bg-rose-50"
              >
                <Video size={24} />
              </Link>
              {contact.type === 'family' && (
                <button className="p-2 text-gray-600 hover:text-rose-600 rounded-full hover:bg-rose-50">
                  <Heart size={24} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};