import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TourPage({ namespace }) {
  const { t } = useTranslation(namespace);

  // Se espera que en i18n la estructura sea como:
  // tour.title, tour.overview, tour.itinerary[0].title, etc.

  // Número de items en itinerario:
  const itineraryLength = t('tour.itinerary.length', { defaultValue: 0 });

  // Para manejar longitud cuando no la tengas, usa un valor fijo o
  // alternativamente mapea por índice hasta que no encuentre un título.
  // Aquí pongo una forma simple de usar un array ficticio para iterar:
  const itineraryIndexes = Array.from(
    { length: itineraryLength || 7 }, // o la cantidad fija que sabes que hay
    (_, i) => i
  );

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
            {t("tour.title")}
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg">{t("tour.overview")}</p>
          <button className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all">
            {t("tour.bookNow", "Reservar ahora")}
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
              src={t("tour.itinerary.0.image")}
              alt={t("tour.title")}
              className="object-cover w-full h-[450px] transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </section>

      {/* ITINERARIO COMO CARRUSEL */}
      <section className="relative z-10 py-20 bg-white/70 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          {t("tour.itineraryTitle", "Itinerario")}
        </h2>
        <div className="flex gap-8 overflow-x-auto px-6 scrollbar-thin scrollbar-thumb-blue-300">
          {itineraryIndexes.map((idx) => {
            // Intentamos leer datos para cada índice, si no existe title, no mostramos
            const title = t(`tour.itinerary.${idx}.title`, { defaultValue: null });
            if (!title) return null;

            return (
              <motion.div
                key={idx}
                className="min-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={t(`tour.itinerary.${idx}.image`)}
                  alt={title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-blue-800 flex items-center gap-2">
                    {t(`tour.itinerary.${idx}.icon`)} {title}
                  </h3>
                  <p className="text-sm text-gray-500">{t(`tour.itinerary.${idx}.time`)}</p>
                  <p className="mt-2 text-gray-600">{t(`tour.itinerary.${idx}.desc`)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECCIÓN DE RECOMENDACIONES / INCLUYE / NO INCLUYE EN TARJETAS CIRCULARES */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-3 text-center">
          {[
            {
              title: t("tour.recommendationsTitle", "Recomendaciones"),
              icon: <Lightbulb className="w-10 h-10" />,
              items: Array.from({ length: t("tour.recommendations.length", { defaultValue: 0 }) }).map(
                (_, i) => t(`tour.recommendations.${i}`)
              )
            },
            {
              title: t("tour.includesTitle", "Incluye"),
              icon: <CheckCircle className="w-10 h-10" />,
              items: Array.from({ length: t("tour.includes.length", { defaultValue: 0 }) }).map(
                (_, i) => t(`tour.includes.${i}`)
              )
            },
            {
              title: t("tour.notIncludesTitle", "No incluye"),
              icon: <XCircle className="w-10 h-10" />,
              items: Array.from({ length: t("tour.notIncludes.length", { defaultValue: 0 }) }).map(
                (_, i) => t(`tour.notIncludes.${i}`)
              )
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
