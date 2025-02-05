import { motion } from "framer-motion";

const services = [
  {
    title: "Desarrollo de Software",
    description:
      "Creamos soluciones a medida con las mejores tecnologías.",
    image: "/ImagenCarrusel1.png",
    items: [
      "Creación de aplicaciones desde cero",
      "Optimización de sistemas y proyectos existentes para mejorar rendimiento y funcionalidad",
      "Desarrollo de sistemas de gestión de bases de datos, juegos interactivos, páginas web modernas, aplicaciones multiplataforma"
    ]
  },
  {
    title: "Dirección de Proyectos IT",
    description:
      "Gestionamos proyectos tecnológicos con metodologías ágiles.",
    image: "/ImagenCarrusel2.png",
    items: [
      "Organización, seguimiento y liderazgo para llevar al éxito tus proyectos",
      "Traducir necesidades de negocio en soluciones estratégicas, optimizando procesos y potenciando el impacto de los productos digitales"
    ]
  },
  {
    title: "Consultoría de Programación",
    description:
      "Asesoramiento experto para optimizar tu código y procesos.",
    image: "/ImagenCarrusel3.png",
    items: [
      "Revisión y optimización de código",
      "Implementación de mejores prácticas de desarrollo",
      "Capacitación y mentoría para equipos de desarrollo"
    ]
  },
];

const Services = () => {
  return (
    <section className="py-20 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-8xl font-bold font-sans">Servicios</h1>
        <br /><br /><br />
        {/* Contenedor de tarjetas con animación */}
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white text-black rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-32 h-32 object-contain mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.h2
                className="mt-4 text-2xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {service.title}
              </motion.h2>
              <motion.p
                className="mt-2 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {service.description}
              </motion.p>
              <ul className="mt-4 text-left list-disc pl-5">
                {service.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
