import { MenuItem } from "./";
import coffees from '../data/coffees.json';
import dishes from '../data/dishes.json';

export const Menu = () => {
  return (
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
            {dishes.map((comida, i) => (
              <MenuItem key={i} item={{ ...comida }} />
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};
