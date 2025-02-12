import { motion } from "framer-motion";

const services = [
  {
    title: "Desarrollo de Software",
    description:
      "Si necesitás una solución digital a medida, te ayudo a hacerla realidad con las mejores tecnologías. Trabajo en frontend, backend y fullstack, así que puedo acompañarte en todo el proceso de desarrollo.",
    image: "/ImagenCarrusel1.png",
    items: [
      "Diseño aplicaciones desde cero, adaptadas a lo que necesitás",
      "Optimizo sistemas existentes para que sean más rápidos, eficientes y fáciles de mantener",
      "Desarrollo bases de datos, páginas web modernas, apps interactivas y soluciones multiplataforma"
    ]
  },
  {
    title: "Dirección de Proyectos IT",
    description:
      "Si tenés un proyecto tecnológico y querés que todo esté bien organizado, te ayudo a planificar y gestionar cada paso con metodologías ágiles.",
    image: "/ImagenCarrusel2.png",
    items: [
      "Te acompaño en la planificación, organización y seguimiento para que tu proyecto avance sin trabas",
      "Como Product Owner, traduzco las necesidades del negocio en soluciones tecnológicas estratégicas",
      "Optimizo procesos y mejoro el impacto de los productos digitales para que logren los mejores resultados"
    ]
  },
  {
    title: "Consultoría de Programación",
    description:
      "Si estás arrancando en la programación y querés mejorar, te ayudo a entender los conceptos clave y a escribir código más limpio y eficiente.",
    image: "/ImagenCarrusel3.png",
    items: [
      "Te explico de manera sencilla Programación Orientada a Objetos (POO) y programación estructurada",
      "Te enseño buenas prácticas para que tu código sea más claro, ordenado y fácil de mantener",
      "Te acompaño con mentoría y capacitaciones para que te sientas seguro programando y puedas encarar proyectos con confianza"
    ]
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-8xl font-bold font-sans">Servicios</h1>
       
        {/* Contenedor de tarjetas con animación */}
        <motion.div
          className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-32  mb-32"
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
              className="p-6 bg-pink-800 bg-opacity-30 text-white rounded-2xl shadow-lg"
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
