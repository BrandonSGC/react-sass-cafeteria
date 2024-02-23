import { Galery, Menu } from "../components/";
import { Footer, Header } from "../layout/";

export const Home = () => {
  return (
    <>
      <Header page="inicio" title="Disfruta una deliciosa taza de café" />

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

          <Galery />
        </section>
      </main>
      
      <Menu />

      <section className="nuestros-testimoniales contenedor">
        <h2>
          Nuestros Clientes <span>Lo que dicen nuestros clientes</span>
        </h2>
        <div className="testimonial">
          <p>
            En La Cafetería, encontré la perfección en cada sorbo. Tiene un sabor
            excepcional que conquistó mi paladar. Desde el primer hasta el
            último sorbo, La Cafetería superó mis expectativas. ¡Un lugar donde la
            calidad del café se fusiona con el arte de brindar una experiencia
            única!
          </p>
          <p className="autor">- Brandon Gómez</p>
        </div>
      </section>

      <Footer />
    </>
  );
};
