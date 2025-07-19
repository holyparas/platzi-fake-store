import styles from "./CheckoutCard.module.css";

const CheckoutCard = ({image, price, name, quantity}) => {
  return (
    <div className={styles.cardWrapper}>
      <img src={image} alt={name} className={styles.img}/>
      <div className={styles.details}>
        <p>{name}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <p className={styles.price}>${price}</p>
    </div>
  );
}

export default CheckoutCard;
