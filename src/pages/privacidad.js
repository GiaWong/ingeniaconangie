import Layout from "../components/Layout";

export default function Privacidad() {
  return (
    <Layout>
      <div className="min-h-screen bg-transparent text-gray-200 flex items-start justify-center mt-16">
        <div className="max-w-4xl p-8 text-center animate-fade-in">
          <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
          <p>
            Esta página es únicamente informativa y no recopila datos personales de los usuarios. 
            No pedimos registro, contraseñas, ni datos financieros. 
          </p>
          <p className="mt-4">
            Cualquier interacción con la 
            página se realiza a través de medios externos como Facebook, Instagram o Gmail, 
            donde el usuario tiene la decisión de enviarnos mensajes.
          </p>
          <p className="mt-4">
            No almacenamos ni compartimos datos personales de ninguna manera.
          </p>
        </div>
      </div>
    </Layout>
  );
}
