import React, { useState } from 'react';
import { Video, Mic, MicOff, VideoOff, Phone } from 'lucide-react';

export const VideoCall = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isCallActive, setIsCallActive] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Videollamada</h1>
      
      <div className="bg-gray-900 aspect-video rounded-lg mb-4 flex items-center justify-center">
        {isCallActive ? (
          <video className="w-full h-full rounded-lg" autoPlay playsInline />
        ) : (
          <div className="text-white text-xl">Fes clic a trucar per començar</div>
        )}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setIsVideoOn(!isVideoOn)}
          className={`p-4 rounded-full ${isVideoOn ? 'bg-gray-200' : 'bg-red-500 text-white'}`}
        >
          {isVideoOn ? <Video size={24} /> : <VideoOff size={24} />}
        </button>
        <button
          onClick={() => setIsAudioOn(!isAudioOn)}
          className={`p-4 rounded-full ${isAudioOn ? 'bg-gray-200' : 'bg-red-500 text-white'}`}
        >
          {isAudioOn ? <Mic size={24} /> : <MicOff size={24} />}
        </button>
        <button
          onClick={() => setIsCallActive(!isCallActive)}
          className={`p-4 rounded-full ${isCallActive ? 'bg-red-500' : 'bg-green-500'} text-white`}
        >
          <Phone size={24} />
        </button>
      </div>
    </div>
  );
};