import Layout from "../components/Layout";

export default function Terminos() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-8 text-gray-200">
        <h1 className="text-3xl font-bold text-center mb-6">Términos y Condiciones</h1>
        <p>
          Todo el contenido, diseño y estructura de esta página web es propiedad exclusiva de 
          IngeniaconAngie y está prohibida su reproducción total o parcial sin autorización.
        </p>
        <p className="mt-4">
          El sitio web se ofrece únicamente con fines informativos. Cualquier intento de hacking, 
          sabotaje o ataque informático contra la plataforma será denunciado de acuerdo con 
          la legislación vigente en Argentina.
        </p>
      </div>
    </Layout>
  );
}
