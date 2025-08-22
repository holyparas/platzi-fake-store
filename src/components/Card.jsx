import { Star } from "lucide-react";
import styles from "./Card.module.css";
import { useState } from "react";

const Card = ({ image, key, price, name, rating, cart, setCart }) => {
  const [qty, setQty] = useState(1);
  console.log("qty:", qty);

  const handleChange = (e) => {
    let value = e.target.value;
    if (value < 0) {
      value = 0;
    }
    setQty(value);
  };

  const addToCart = (e) => {
    console.log("event", e);
    if (qty > 0) {
      setCart([...cart, { image, price, name, quantity: qty, key }]);
    }
  };
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt={name} className={styles.cardImg} loading="lazy" />
      <p>${price}</p>
      <p>{name}</p>
      <div className={styles.cardRating}>
        <div>
          {rating.rate}
          <Star color="#ffd700" size={18} />
        </div>
        <div>{rating.count} reviews</div>
      </div>
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        value={qty}
        onChange={handleChange}
        min={0}
      />
      <button className={styles.addToCartBtn} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
