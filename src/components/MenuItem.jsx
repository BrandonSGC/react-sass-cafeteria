export const MenuItem = ({item}) => {
  const {name, description, price} = item;
  return (
    <>
      <li>
        <p>{name}<span>{description}</span></p>
        <p className="precio">{price}</p>
      </li>
    </>
  )
}
