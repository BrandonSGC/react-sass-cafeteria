import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuItem } from "../components/MenuItem";

export const Home = () => {
  const imagenes = [...Array(10)].map((_, index) => {
    const imagenSrc =
      index + 1 < 10
        ? `/images/galeria/galeria_0${index + 1}.jpg`
        : `/images/galeria/galeria_${index + 1}.jpg`;

    return (
      <div className="imagen" key={index + 1}>
        <img src={imagenSrc} alt={`Imagen ${index + 1}`} />
      </div>
    );
  });

  const coffees = [
    {
      name: "Café Latte",
      description: "Café Espresso con leche caliente evaporada",
      price: "$25",
    },
    {
      name: "Café Mocha",
      description: "Espresso con crema batida",
      price: "$30",
    },
    {
      name: "Café Americano",
      description: "Café Negro",
      price: "$30",
    },
    {
      name: "Café Mocha Frio",
      description: "Espresso con una capa suave de espuma",
      price: "$29",
    },
    {
      name: "Mocha Frio Quemado",
      description: "Espresso, hielo, con azucar quemada y mantequilla.",
      price: "$35",
    },
    {
      name: "Latte con Caramelo",
      description: "Espresso, leche y caramelo.",
      price: "$39",
    },
  ];

  const comidas = [
    {
      name: "Baguette de Pollo",
      description: "Delicioso Baguette con pollo a la plancha.",
      price: "$50",
    },
    {
      name: "Baguette Pollo y Queso",
      description: "Baguette combinado con Pollo y Queso Manchego.",
      price: "$50",
    },
    {
      name: "Baguette con Tocino",
      description: "Delicioso sandwich con Pollo y especies.",
      price: "$69",
    },
    {
      name: "Baguette con Jamón, Queso y Tocino",
      description: "Espresso con una capa suave de espuma.",
      price: "$65",
    },
    {
      name: "Sandwich de Jamón y queso",
      description: "Queso Amarillo con Jamón y Queso.",
      price: "$59",
    },
    {
      name: "Sandwich del pueblo",
      description: "Pan con queso, mortadela y salsa de tomate.",
      price: "$59",
    },
  ];

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

        <section className="experiencia">
          <h2>
            <span>Vive la </span>experiencia
          </h2>

          <div className="galeria">{imagenes}</div>
        </section>
      </main>

      <section className="nuestro-menu">
        <h2 className="heading-blanco">
          <span>Nuestro delicioso</span> Menú
        </h2>

        <div className="contenedor grid-menu">
          <section className="menu cafe">
            <h3>Café</h3>
            <ul>
              {coffees.map((coffee, i) => (
                <MenuItem key={i} item={{ ...coffee }} />
              ))}
            </ul>
          </section>

          <section className="menu comida">
            <h3>Comida</h3>
            <ul>
              {comidas.map((comida, i) => (
                <MenuItem key={i} item={{ ...comida }} />
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="nuestros-testimoniales contenedor">
        <h2>
          Nuestros Clientes <span>Lo que dicen nuestros clientes</span>
        </h2>
        <div className="testimonial">
          <p>
            En Miyodito, encontré la perfección en cada sorbo. Tiene un sabor
            excepcional que conquistó mi paladar. Desde el primer hasta el
            último sorbo, Miyodito superó mis expectativas. ¡Un lugar donde la
            calidad del café se fusiona con el arte de brindar una experiencia
            única!
          </p>
          <p className="autor">- Brandon Gómez</p>
        </div>
      </section>

      <footer className="footer">
        <div className="contenedor footer-contenedor">
          <div className="footer-box ubicacion">
            <h3>Ubicación</h3>
            <p>Nicolás Copérnico 5990</p>
            <p>San José, Alajuelita</p>
          </div>

          <div className="footer-box reservacion">
            <h3>Reservación</h3>
            <p>Tel. 70428451</p>
            <a href="tel:70428451">Llamar</a>
          </div>

          <div className="footer-box horario">
            <h3>Horario</h3>
            <p>Lun-Jue: 11:00 - 22:00</p>
            <p>Vie-Sab: 09:00 - 24:00</p>
            <p>Domingo: Cerrado</p>
          </div>
        </div>
        <p className="copyright">Todos los derechos reservados. La Cafetería</p>
      </footer>
    </>
  );
};