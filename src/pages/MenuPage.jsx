import React from "react";
import { Footer, Header } from "../layout";
import { Menu } from "../components";

export const MenuPage = () => {
  return (
    <>
      <Header page="menu" title="Disfruta de nuestro delicioso menú" />
      <main className="contenedor contenido-principal">
        <h2>
          <span>Utilizamos los</span> mejores ingredientes
        </h2>
        <div className="contenido-menu">
          <div className="texto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              repellat beatae mollitia ipsam. Itaque, libero natus? Facere,
              itaque totam enim sint harum aut sed, doloremque, ea earum tempora
              id in. Itaque, libero natus? Facere, itaque totam enim sint harum
              aut sed, doloremque, ea earum tempora id in Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloremque dolorum dignissimos aut accusantium laborum! Porro, asperiores at excepturi reprehenderit qui alias consequuntur deserunt commodi tempora officiis nemo, inventore ducimus?
            </p>
          </div>
          <div className="imagen">
            <img src="/images/galeria/galeria_09.jpg" alt="cafe" />
          </div>
        </div>
      </main>

      <Menu />

      <Footer />
    </>
  );
};
