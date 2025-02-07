import Layout from "../components/Layout";

export default function Privacidad() {
  return (
    <Layout>
      <div className="min-h-screen bg-transparent text-gray-200">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Política de Privacidad</h1>
          <p>
            Esta página es únicamente informativa y no recopila datos personales de los usuarios. 
            No pedimos registro, contraseñas, ni datos financieros. Cualquier interacción con la 
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
