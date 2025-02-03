import { useState, useEffect } from 'react';

const features = [
  {
    title: "Gestión de tareas",
    description: "Organiza tus tareas en listas y establece prioridades fácilmente.",
    icon: "✅",
  },
  {
    title: "Colaboración en equipo",
    description: "Comparte proyectos con tu equipo y trabaja de forma eficiente.",
    icon: "🤝",
  },
  {
    title: "Recordatorios inteligentes",
    description: "Recibe notificaciones para no olvidar tareas importantes.",
    icon: "⏰",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white animate-fade-in">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Características principales</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
