const contacts = [
  {
    name: "Redes Sociales",
    message1: "Búscame en Instagram como @ingeniaconangie",
    link1: "https://www.instagram.com/ingeniaconangie/",
    message2: "o Facebook como ingeniaconangie",
    link2: "https://www.facebook.com/ingeniaconangie",
    image: "/instagram_facebook.png",
  },
  {
    name: "LinkedIn",
    message: "Búscame en LinkedIn",
    link: "https://www.linkedin.com/in/chavelaa",
    image: "/linkedin.png",
  },
  {
    name: "Correo Electrónico",
    message: "Mándame un mensaje por mail",
    email: "mailto:laboral.wong@gmail.com",
    image: "/email.png",
  },
];

const Contact = () => {
  return (
    <section className="py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white animate-fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Contacto</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md text-center"
            >
              <img src={contact.image} alt={contact.name} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{contact.name}</h3>
              {contact.link1 && contact.link2 ? (
                <p className="mt-2 text-lg">
                  <a
                    href={contact.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {contact.message1}
                  </a>
                  <br />
                  <a
                    href={contact.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {contact.message2}
                  </a>
                </p>
              ) : contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-lg font-medium text-blue-600 hover:underline"
                >
                  {contact.message}
                </a>
              ) : contact.email ? (
                <a
                  href={contact.email}
                  className="mt-2 text-lg font-medium text-blue-600 hover:underline"
                >
                  {contact.message}
                </a>
              ) : (
                <p className="mt-2 text-lg text-gray-700">{contact.message}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
