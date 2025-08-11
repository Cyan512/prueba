import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Lightbulb } from "lucide-react";

export default function TourPage({ data }) {
  const { title, overview, itinerary, recommendations, includes, notIncludes } = data;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden">

      {/* FONDO ANIMADO */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-yellow-200/30 via-transparent to-blue-200/30"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* HERO NUEVO ESTILO */}
      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto py-20 px-6 gap-12">
        {/* Texto */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg">{overview}</p>
          <button className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all">
            Reservar ahora
          </button>
        </motion.div>
        {/* Imagen */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={itinerary?.[0]?.image}
              alt={title}
              className="object-cover w-full h-[450px] transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </section>

      {/* ITINERARIO COMO CARRUSEL */}
      <section className="relative z-10 py-20 bg-white/70 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Itinerario
        </h2>
        <div className="flex gap-8 overflow-x-auto px-6 scrollbar-thin scrollbar-thumb-blue-300">
          {itinerary.map((item, idx) => (
            <motion.div
              key={idx}
              className="min-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-blue-800 flex items-center gap-2">
                  {item.icon} {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.time}</p>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECCIÓN DE RECOMENDACIONES / INCLUYE / NO INCLUYE EN TARJETAS CIRCULARES */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-3 text-center">
          {[
            {
              title: "Recomendaciones",
              icon: <Lightbulb className="w-10 h-10" />,
              items: recommendations
            },
            {
              title: "Incluye",
              icon: <CheckCircle className="w-10 h-10" />,
              items: includes
            },
            {
              title: "No incluye",
              icon: <XCircle className="w-10 h-10" />,
              items: notIncludes
            }
          ].map((sec, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-white/10 rounded-full p-10 border border-white/20 hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="bg-white/20 p-4 rounded-full mb-4">{sec.icon}</div>
              <h3 className="text-xl font-bold mb-4">{sec.title}</h3>
              <ul className="space-y-2 text-sm">
                {sec.items.map((item, idx) => (
                  <li key={idx} className="opacity-90">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
