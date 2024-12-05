import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Iniciar Sessió</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-lg mb-2">Correu electrònic</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg text-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-lg mb-2">Contrasenya</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg text-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-rose-600 text-white py-3 rounded-lg text-lg hover:bg-rose-700"
        >
          Iniciar Sessió
        </button>
      </form>
      <p className="mt-4 text-center text-lg">
        No tens compte?{' '}
        <Link to="/register" className="text-rose-600 hover:underline">
          Registra't
        </Link>
      </p>
    </div>
  );
};