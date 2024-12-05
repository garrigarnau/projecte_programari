import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: 'patient'
  });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(formData);
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Registre</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg mb-2">Nom complet</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 border rounded-lg text-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg mb-2">Correu electrònic</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 border rounded-lg text-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-lg mb-2">Contrasenya</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-3 border rounded-lg text-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="userType" className="block text-lg mb-2">Tipus d'usuari</label>
          <select
            id="userType"
            value={formData.userType}
            onChange={(e) => setFormData({ ...formData, userType: e.target.value as 'patient' | 'family' | 'doctor' })}
            className="w-full p-3 border rounded-lg text-lg"
          >
            <option value="patient">Pacient</option>
            <option value="family">Familiar</option>
            <option value="doctor">Metge</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-rose-600 text-white py-3 rounded-lg text-lg hover:bg-rose-700"
        >
          Registrar-se
        </button>
      </form>
      <p className="mt-4 text-center text-lg">
        Ja tens compte?{' '}
        <Link to="/login" className="text-rose-600 hover:underline">
          Inicia sessió
        </Link>
      </p>
    </div>
  );
};