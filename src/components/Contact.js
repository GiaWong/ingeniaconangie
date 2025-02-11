import { useEffect, useState, useRef } from "react";

const contacts = [
  {
    name: "Redes Sociales",
    message1: "Búscame en Instagram ",
    link1: "https://www.instagram.com/ingeniaconangie/",
    message2: "o Facebook ",
    link2: "https://www.facebook.com/ingeniaconangie",
    image: "/ImagenFBoInsta.png",
  },
  {
    name: "LinkedIn",
    message: "Búscame en LinkedIn",
    link: "https://www.linkedin.com/in/chavelaa",
    image: "/ImagenLinkedin.png",
  },
  {
    name: "Correo Electrónico",
    message: "Mándame un mensaje por mail",
    image: "/ImagenMail.png",
    isMail: true, // Nueva propiedad para identificar el botón de correo
  },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Función para abrir Gmail con un borrador listo
  const handleMailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=laboral.wong@gmail.com", "_blank");
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-8xl font-bold font-sans text-center">Contacto</h2>
        <div className="mt-32  mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`p-6 bg-purple-800 bg-opacity-30 rounded-lg shadow-md text-center transform transition duration-500 ease-out hover:scale-110 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <img src={contact.image} alt={contact.name} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white-800">{contact.name}</h3>

              {contact.link1 && contact.link2 ? (
                <p className="mt-2 text-lg">
                  <a
                    href={contact.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    {contact.message1}
                  </a>
                  <br />
                  <a
                    href={contact.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    {contact.message2}
                  </a>
                </p>
              ) : contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-lg font-medium text-white hover:underline"
                >
                  {contact.message}
                </a>
              ) : contact.isMail ? (
                <button
                  onClick={handleMailClick}
                  className="mt-2 text-lg font-medium text-white hover:underline"
                >
                  {contact.message}
                </button>
              ) : (
                <p className="mt-2 text-lg text-white">{contact.message}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
