import styles from "./CheckoutCard.module.css";

const CheckoutCard = ({ quantity, item, updateQuantity }) => {
  return (
    <div className={styles.cardWrapper}>
      <img src={item.image} alt={item.title} className={styles.img} />
      <div className={styles.details}>
        <p>{item.title}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={() => updateQuantity(item.id, 1)}>Add</button>
        <button onClick={() => updateQuantity(item.id, -1)}>Subtract</button>
      </div>
      <p className={styles.price}>${(item.price * quantity).toFixed(2)}</p>
    </div>
  );
};

export default CheckoutCard;
