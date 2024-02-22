export const CoffeeProcess = ({ image, title, text }) => {
  return (
    <div className="proceso-cafe">
      <div className="imagen">
        <img src={`/images/proceso_${image}.jpg`} alt="proceso cafe" />
      </div>
      <div className="texto">
        <h3>{title}</h3>
        <p>
          {
            text
              ? text
              : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quasi aperiam dolor iste fugit quos mollitia ducimus non. Nobis architecto deserunt dolores dignissimos vitae. Estm ollitia architecto iste omnis. Ipsam?"
          }
        </p>
      </div>
    </div>
  );
};
