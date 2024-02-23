import { Footer, Header } from "../layout";

export const Us = () => {
  return (
    <>
      <Header page="nosotros" title="Una nueva experiencia cada día" />

      <main className="contenedor contenido-principal">
        <h2>
          <span>Conoce más</span> Sobre Nosotros
        </h2>

        <div className="contenido-nosotros">
          <div className="imagen">
            <img src="/images/nosotros_sidebar.jpg" alt="Sobre Nosotros" />
          </div>
          <div className="texto">
            <p>
              Bienvenido a La Cafetería, tu refugio acogedor para los amantes del
              buen café y los momentos deliciosos. Sumérgete en un ambiente
              donde la elegancia se combina con la calidez, creando el espacio
              perfecto para disfrutar de momentos inolvidables.
            </p>
            <blockquote>Excelente Sabor!</blockquote>
            <p>
              En La Cafetería, cada taza es una obra maestra cuidadosamente
              elaborada, donde el arte del café se fusiona con la pasión por la
              calidad. Nuestros granos cuidadosamente seleccionados y tostados a
              la perfección te ofrecen una experiencia única en cada sorbo.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
