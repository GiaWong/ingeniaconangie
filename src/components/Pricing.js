const plans = [
  {
    name: "Gratis",
    price: "$0/mes",
    features: ["Tareas ilimitadas", "Colaboración básica", "Soporte por email"],
  },
  {
    name: "Pro",
    price: "$9.99/mes",
    features: ["Todo en Gratis", "Integraciones avanzadas", "Soporte prioritario"],
  },
  {
    name: "Empresas",
    price: "Personalizado",
    features: ["Todo en Pro", "Gestión de equipos", "Soporte 24/7"],
  },
];

const Pricing = () => {
  return (
    <section className="py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white animate-fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Contacto</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Elegir Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
