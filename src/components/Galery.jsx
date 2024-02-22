export const Galery = () => {
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

  return (
    <>
      <div className="galeria">{imagenes}</div>
    </>
  );
};