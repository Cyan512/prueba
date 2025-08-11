import { motion } from "framer-motion";


const Experiences = () => {
  const servicios = [
    {
      titulo: "Alojamiento de lujo",
      descripcion:
        "Hoteles cuidadosamente seleccionados para ofrecer el máximo confort y hospitalidad en cada destino.",
      icono: "🏨",
    },
    {
      titulo: "Transporte seguro",
      descripcion:
        "Traslados cómodos y confiables para garantizar que tu experiencia sea fluida y sin preocupaciones.",
      icono: "🚌",
    },
    {
      titulo: "Experiencias guiadas",
      descripcion:
        "Guías expertos que comparten su conocimiento local para enriquecer tu viaje.",
      icono: "🗺️",
    },
    {
      titulo: "Gastronomía local",
      descripcion:
        "Degusta los mejores platillos típicos con experiencias culinarias auténticas.",
      icono: "🍽️",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Nuestras Experiencias</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Servicios de calidad que han dejado huella en cada viaje, respaldados
          por nuestros clientes y socios estratégicos.
        </p>
      </section>

      {/* Sección de servicios */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Servicios de calidad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center border hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">{servicio.icono}</div>
              <h3 className="text-xl font-semibold mb-2">{servicio.titulo}</h3>
              <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Experiences

