export const Footer = () => {
  return (
    <>
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
