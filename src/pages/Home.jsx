import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Home = () => {
  

  return (
    <>
      <header className="header header-inicio">
        <div className="contenido-header contenedor">
          <div className="barra">
            <Link to="/" className="logo">
              <img src="/images/logo.svg" alt="Logo" />
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

      <main className="contenedor contenido-principal text-center">
        <section className="conoce">
          <h2>
            <span>Conoce más</span> Sobre Nosotros
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            voluptatibus vitae autem. Praesentium mollitia sapiente sint
            aspernatur sunt qui fugit totam? Unde blanditiis doloremque,
            aspernatur ad porro repudiandae impedit saepe.
          </p>
        </section>

        <section className="iconos">
          <ul className="listado-iconos">
            <li>
              <img src="/images/icono_cafe.svg" alt="icono café" />
              <p>Café</p>
            </li>
            <li>
              <img src="/images/icono_postre.svg" alt="icono postres" />
              <p>Postres</p>
            </li>
            <li>
              <img src="/images/icono_te.svg" alt="icono té" />
              <p>Té</p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
