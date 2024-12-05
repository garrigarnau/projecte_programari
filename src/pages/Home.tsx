import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Activity, Users } from 'lucide-react';

export const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Benvinguts a SmartWare
      </h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <Link
          to="/video-call"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <Video className="h-12 w-12 text-rose-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Videollamades</h2>
          <p className="text-gray-600">
            Connecta amb la família i els professionals sanitaris de manera fàcil i segura.
          </p>
        </Link>

        <Link
          to="/health"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <Activity className="h-12 w-12 text-rose-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Seguiment de Salut</h2>
          <p className="text-gray-600">
            Gestiona les teves dades mèdiques i rep recordatoris importants.
          </p>
        </Link>

        <Link
          to="/contacts"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <Users className="h-12 w-12 text-rose-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Contactes</h2>
          <p className="text-gray-600">
            Administra la teva xarxa de suport i professionals sanitaris.
          </p>
        </Link>
      </div>

      <div className="mt-12 bg-rose-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-rose-800">
          Com podem ajudar-te avui?
        </h2>
        <p className="text-rose-700 text-lg">
          SmartWare està dissenyat per fer la teva vida més fàcil i mantenir-te connectat.
          Si necessites ajuda, pots contactar amb el nostre equip de suport en qualsevol moment.
        </p>
      </div>
    </div>
  );
};