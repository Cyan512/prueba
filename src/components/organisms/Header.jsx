import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { cn } from "@utils/cn";
import { useEffect, useState } from "react";
import logo from "@assets/logo.png";

const links = [
  { name: "Inicio", to: "/" },
  { name: "Destinos", to: "/destinations" },
  { name: "Experiencias", to: "/experiences" },
  { name: "Sobre Nosotros", to: "/about" },
  { name: "Contáctanos", to: "/contact" },
];

const Header = () => {
  const [t, i18n] = useTranslation("global");
  // Cargar idioma guardado al iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // Cambiar idioma y guardarlo
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <header className=" shadow-sm ">
      <div className="max-w-[75rem] px-4 mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </NavLink>

        {/* Navegación */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          {links.map((l) => (
            <NavLink
              key={l.name}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "hover:text-[#FF6210] transition-colors duration-300",
                  isActive ? "text-[#FF6210]" : ""
                )
              }
            >
              {l.name}
            </NavLink>
          ))}
        </nav>

        <div>
          <button className="cursor-pointer" onClick={() => changeLanguage("es")}>Es</button>
          <button className="cursor-pointer" onClick={() => changeLanguage("en")}>En</button>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
