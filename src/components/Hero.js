import { useState, useEffect } from 'react';

const Hero = () => {
  return (
    <section className="py-20 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white animate-fade-in">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-8xl font-bold font-sans">
          Servicios 
        </h1>
        <p className="mt-4 text-lg">
          La mejor herramienta para gestionar tareas y mejorar tu productividad.
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600">
            Empezar ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
