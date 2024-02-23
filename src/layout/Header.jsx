import { Link, NavLink } from "react-router-dom";

export const Header = ({page = '', title}) => {
  return (
    <header className={`header header-${page}`}>
      <div className="contenido-header contenedor">
        <div className="barra">
          <Link to="/home" className="logo">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>

          <nav className="nav-principal">
            <NavLink
              className={({ isActive }) => `${isActive && "activo"}`}
              to="/home"
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) => `${isActive && "activo"}`}
              to="/us"
            >
              Nosotros
            </NavLink>
            <NavLink
              className={({ isActive }) => `${isActive && "activo"}`}
              to="/process"
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
              to="/galery"
            >
              Galería
            </NavLink>
            <NavLink
              className={({ isActive }) => `${isActive && "activo"}`}
              to="/contact"
            >
              Contacto
            </NavLink>
          </nav>
        </div>

        <div className="text-header">
          <h1>{title}</h1>
        </div>
      </div>
    </header>
  );
};
