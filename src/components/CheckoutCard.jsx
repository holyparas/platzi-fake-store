import styles from "./CheckoutCard.module.css";
// FIX buttons to add or subtract quantity
const CheckoutCard = ({image, price, name, quantity, item}) => {
  return (
    <div className={styles.cardWrapper}>
      <img src={image} alt={name} className={styles.img}/>
      <div className={styles.details}>
        <p>{name}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={item.quantity= item.quantity + 1}>Add</button> 
        <button onClick={quantity-1}>Subtract</button>
      </div>
      <p className={styles.price}>${price}</p>
    </div>
  );
}

export default CheckoutCard;
