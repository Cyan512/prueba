import { motion } from "framer-motion";


const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-6 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contáctanos
        </motion.h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          ¿Tienes alguna pregunta o deseas trabajar con nosotros?
          Rellena el formulario y nos pondremos en contacto contigo lo antes posible.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <motion.form
            className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label className="block text-gray-700 font-medium">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Correo electrónico</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Mensaje</label>
              <textarea
                rows="4"
                placeholder="Escribe tu mensaje..."
                className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar mensaje
            </button>
          </motion.form>

          {/* Información de contacto */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Nuestra oficina</h3>
              <p className="text-gray-600">
                Av. Principal 123,
                Cusco, Perú
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Teléfono</h3>
              <p className="text-gray-600">+51 987 654 321</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Correo</h3>
              <p className="text-gray-600">contacto@empresa.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Horario de atención</h3>
              <p className="text-gray-600">Lun - Vie: 9:00 AM - 6:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact