import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <header className="header header-inicio">
        <div className="contenido-header contenedor">
          <div className="barra">
            <Link to="/" className="logo">
              <img src="/icons/logo.svg" alt="Logo" />
            </Link>

            <nav className="nav-principal">
              <NavLink
                className={({ isActive }) => `${isActive && "activo"}`}
                to="/"
              >
                Inicio
              </NavLink>
              <NavLink
                className={({ isActive }) => `${isActive && "activo"}`}
                to="/nosotros"
              >
                Nosotros
              </NavLink>
              <NavLink
                className={({ isActive }) => `${isActive && "activo"}`}
                to="/proceso"
              >
                Proceso
              </NavLink>
              <NavLink
                className={({ isActive }) => `${isActive && "activo"}`}
                to="/menu"
              >
                Menú
              </NavLink>
              <NavLink
                className={({ isActive }) => `${isActive && "activo"}`}
                to="/galeria"
              >
                Galería
              </NavLink>
              <NavLink
                className={({ isActive }) => `${isActive && "activo"}`}
                to="/contacto"
              >
                Contacto
              </NavLink>
            </nav>
          </div>

          <div className="text-header">
            <h1>Disfruta una deliciosa taza de café</h1>
          </div>
        </div>
      </header>
    </>
  );
};
