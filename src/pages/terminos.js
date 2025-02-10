import Layout from "../components/Layout";

export default function Terminos() {
  return (
    <Layout>
      <div className="min-h-screen bg-transparent text-gray-200 flex items-start justify-center mt-16">
        <div className="max-w-4xl p-8 text-center">
          <h1 
            className="text-3xl font-bold mb-6 animate-fade-in" 
            style={{ animationDelay: '0s' }}
          >
            Términos y Condiciones
          </h1>
          <p 
            className="animate-fade-in" 
            style={{ animationDelay: '0.3s' }}
          >
            Todo el contenido, diseño y estructura de esta página web es propiedad exclusiva de 
            ingeniaconangie y está prohibida su reproducción total o parcial sin autorización.
          </p>
          <p 
            className="mt-4 animate-fade-in" 
            style={{ animationDelay: '0.6s' }}
          >
            El sitio web se ofrece únicamente con fines informativos. Cualquier intento de hacking, 
            sabotaje o ataque informático contra la plataforma será denunciado de acuerdo con 
            la legislación vigente en Argentina.
          </p>
        </div>
      </div>
    </Layout>
  );
}
