import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Encabezado */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Sobre Nosotros
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 max-w-2xl mx-auto text-lg"
        >
          Conoce más sobre quiénes somos, nuestra historia y el compromiso que
          tenemos contigo.
        </motion.p>
      </section>

      {/* Historia */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="Nuestro equipo"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Desde nuestros inicios, hemos trabajado para brindar soluciones
              innovadoras que conecten personas, destinos y experiencias
              inolvidables. Nuestra pasión por la excelencia nos ha llevado a
              trabajar con los mejores aliados del sector, asegurando siempre
              la satisfacción de nuestros clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Misión",
              text: "Brindar experiencias únicas y de calidad que superen las expectativas de nuestros clientes.",
              icon: "🌟",
            },
            {
              title: "Visión",
              text: "Ser líderes en nuestro sector, reconocidos por la innovación, confianza y compromiso.",
              icon: "🚀",
            },
            {
              title: "Valores",
              text: "Compromiso, transparencia, calidad y pasión por lo que hacemos.",
              icon: "🤝",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Nuestro Equipo
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Ana Pérez", role: "Directora General" },
            { name: "Luis Gómez", role: "Gerente de Operaciones" },
            { name: "María Torres", role: "Marketing y Comunicación" },
            { name: "Carlos Ruiz", role: "Atención al Cliente" },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                src={`https://i.pravatar.cc/150?img=${index + 10}`}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About