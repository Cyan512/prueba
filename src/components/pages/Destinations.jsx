import React from "react";
import { Link } from "react-router-dom";

const Destinations = () => {
  const destinations = [
    {
      name: "Ausangate Trek",
      subtitle: "Aventura en los Andes",
      image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1920",
      path: "/destinations/ausangate-trek"
    },
    {
      name: "Choquequirao",
      subtitle: "La ciudad perdida",
      image: "https://images.unsplash.com/photo-1549887534-7c8d2c93c142?q=80&w=1920",
      path: "/destinations/choquequirao"
    },
    {
      name: "Cusco City Tour",
      subtitle: "Historia viva",
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1920",
      path: "/destinations/cusco-city-tour"
    },
    {
      name: "Laguna Humantay",
      subtitle: "Espejo turquesa",
      image: "https://images.unsplash.com/photo-1618329278695-8942b9d1f92d?q=80&w=1920",
      path: "/destinations/laguna-humantay"
    },
    {
      name: "Lares Trek",
      subtitle: "Sendero ancestral",
      image: "https://images.unsplash.com/photo-1580579599550-3e7c9789c5a0?q=80&w=1920",
      path: "/destinations/lares-trek"
    },
    {
      name: "Palcoyo",
      subtitle: "Montaña de colores",
      image: "https://images.unsplash.com/photo-1563897539633-7374c276c212?q=80&w=1920",
      path: "/destinations/palcoyo"
    },
    {
      name: "Salkantay Trek",
      subtitle: "Reto y belleza",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1920",
      path: "/destinations/salkantay-trek"
    },
    {
      name: "Valle Sagrado",
      subtitle: "Cultura y paisajes",
      image: "https://images.unsplash.com/photo-1563371351-e53ebb744a1f?q=80&w=1920",
      path: "/destinations/valle-sagrado"
    }
  ];

  const empresas = [
    { id: 1, nombre: "Empresa 1", logo: "/logos/empresa1.png" },
    { id: 2, nombre: "Empresa 2", logo: "/logos/empresa2.png" },
    { id: 3, nombre: "Empresa 3", logo: "/logos/empresa3.png" },
    { id: 4, nombre: "Empresa 4", logo: "/logos/empresa4.png" },
    { id: 5, nombre: "Empresa 5", logo: "/logos/empresa5.png" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1605647540924-852290f99a75?q=80&w=1920"
          alt="Hero Destinos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Explora Nuestros Destinos
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Descubre aventuras únicas y paisajes inolvidables alrededor del mundo.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {destinations.map((dest, idx) => (
            <Link
              to={dest.path}
              key={idx}
              className="relative group h-64 overflow-hidden cursor-pointer block"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h2 className="text-lg font-bold">{dest.name}</h2>
                <p className="text-sm">{dest.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Confianza y Valor */}
      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-2">Confianza y Valor</h2>
          <p className="text-gray-600 mb-10">
            Las experiencias que nos respaldan.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {empresas.map((empresa) => (
              <div key={empresa.id} className="flex justify-center">
                <img
                  src={empresa.logo}
                  alt={empresa.nombre}
                  className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
