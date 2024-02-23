import { Footer, Header } from "../layout";

export const Contact = () => {
  return (
    <>
      <Header page="contacto" title="Disfruta de una deliciosa taza de Café" />

      <main className="contenedor contenido-principal">
        <h2>
          <span>Reserva tu </span>Mesa
        </h2>

        <div className="contenido-contacto">
          <form className="formulario-contacto">
            <div className="campo">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" placeholder="Tu nombre" required />
            </div>

            <div className="campo">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Tu email" required />
            </div>

            <div className="campo">
              <label htmlFor="cantidad">Número de personas:</label>
              <select name="cantidad" id="cantidad" defaultValue="">
                <option value="" disabled>
                  -- Seleccione una opción
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="mas">+4</option>
              </select>
            </div>

            <div className="campo">
              <label htmlFor="hora">Hora:</label>
              <input type="time" id="hora" required />
            </div>

            <div className="campo">
              <label htmlFor="fecha">Fecha:</label>
              <input type="date" id="fecha" required />
            </div>

            <div className="campo">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};
