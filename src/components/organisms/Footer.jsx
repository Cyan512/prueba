import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-10">
      <div className="max-w-[75rem] px-4 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-bold mb-3">TuEmpresa</h2>
          <p className="text-gray-400 text-sm">
            Creamos experiencias de viaje inolvidables. Descubre nuevos destinos
            y vive la aventura.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-[#FF6210] transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/destinations"
                className="hover:text-[#FF6210] transition-colors"
              >
                Destinos
              </a>
            </li>
            <li>
              <a
                href="/experiences"
                className="hover:text-[#FF6210] transition-colors"
              >
                Experiencias
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#FF6210] transition-colors"
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#FF6210] transition-colors"
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📍 Cusco, Perú</li>
            <li>📞 +51 987 654 321</li>
            <li>✉️ info@tuempresa.com</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#FF6210] text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-[#FF6210] text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-[#FF6210] text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-[#FF6210] text-2xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TuEmpresa. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
