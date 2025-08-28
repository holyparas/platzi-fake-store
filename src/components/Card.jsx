import { Star } from "lucide-react";
import styles from "./Card.module.css";
import { useState } from "react";

const Card = ({ item, cart, setCart }) => {
  const [qty, setQty] = useState(1);

  const handleChange = (e) => {
    let value = e.target.value;
    if (value < 0) {
      value = 0;
    }
    setQty(value);
  };

  const addToCart = () => {
    const existing = cart.find((cartItem) => cartItem.item.id === item.id);
    if (existing) {
      setCart(
        cart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + Number(qty) }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { item, quantity: qty }]);
    }
  };
  console.log("CART: ", cart);
  return (
    <div className={styles.cardContainer}>
      <img
        src={item.image}
        alt={item.title}
        className={styles.cardImg}
        loading="lazy"
      />
      <p>${item.price.toFixed(2)}</p>
      <p>{item.title}</p>
      <div className={styles.cardRating}>
        <div>
          {item.rating.rate}
          <Star color="#ffd700" size={18} />
        </div>
        <div>{item.rating.count} reviews</div>
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
