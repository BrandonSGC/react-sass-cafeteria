import { Galery } from "../components";
import { Footer, Header } from "../layout";

export const GaleryPage = () => {
  return (
    <>
      <Header page="galeria" title="Disfruta de una deliciosa taza de Café" />
      <main className="contenedor contenido-principal">
        <section className="experiencia">
          <h2>
            <span>Vive la </span>experiencia
          </h2>

          <Galery />
        </section>
      </main>
      <Footer />
    </>
  );
};
