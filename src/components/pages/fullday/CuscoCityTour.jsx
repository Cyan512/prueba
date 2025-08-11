import React from "react";
import { motion } from "framer-motion";
import { cuscoCityTourData } from "@data/fullday/cuscoCityTour";

export default function CuscoCityTour() {
  const {
    title,
    overview,
    itinerary,
    recommendations,
    includes,
    notIncludes,
  } = cuscoCityTourData;

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1555961413-c7c8e6fd3b80?w=1920&q=80"
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
            {title}
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Vive una experiencia única explorando la capital arqueológica de
            América
          </p>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Resumen del Tour
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed text-gray-700 text-justify bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {overview}
        </motion.p>
      </section>

      {/* Itinerario */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Itinerario
          </h2>
          <div className="space-y-10">
            {itinerary.map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl shadow-xl backdrop-blur-md bg-white/80 border border-gray-100 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-64 h-40 object-cover rounded-xl shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold flex items-center gap-2 text-gray-900">
                    <span className="text-3xl">{item.icon}</span> {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.time}</p>
                  <p className="text-gray-700 mt-3">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recomendaciones */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Recomendaciones
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendations.map((rec, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 backdrop-blur-lg p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
            >
              {rec}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Incluye / No Incluye */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              ✅ Incluye
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {includes.map((inc, idx) => (
                <li key={idx}>{inc}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">
              ❌ No Incluye
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {notIncludes.map((ninc, idx) => (
                <li key={idx}>{ninc}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-green-500 to-teal-500 py-12 text-center text-white">
        <motion.h3
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¿Listo para vivir esta experiencia?
        </motion.h3>
        <motion.button
          className="mt-6 bg-white text-green-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Reservar Ahora
        </motion.button>
      </section>
    </div>
  );
}
