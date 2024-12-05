import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { date: '1/3', pressio: 120, sucre: 95 },
  { date: '2/3', pressio: 118, sucre: 92 },
  { date: '3/3', pressio: 122, sucre: 98 },
  { date: '4/3', pressio: 119, sucre: 94 },
  { date: '5/3', pressio: 121, sucre: 96 },
];

export const Health = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Seguiment de Salut</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Evolució</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="pressio" stroke="#e11d48" name="Pressió" />
              <Line type="monotone" dataKey="sucre" stroke="#2563eb" name="Sucre" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Última pressió arterial</h3>
          <p className="text-3xl font-bold text-rose-600">121/80</p>
          <p className="text-gray-600">Registrat: 5/3/2024</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Últim nivell de sucre</h3>
          <p className="text-3xl font-bold text-blue-600">96 mg/dL</p>
          <p className="text-gray-600">Registrat: 5/3/2024</p>
        </div>
      </div>
    </div>
  );
};