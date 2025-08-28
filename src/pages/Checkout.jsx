import { useOutletContext } from "react-router-dom";
import CheckoutCard from "../components/CheckoutCard";
import styles from "../components/CheckoutCard.module.css";

const Checkout = () => {
  const { cart, setCart } = useOutletContext();

  // Update quantity for a specific item
  const updateQuantity = (id, delta) => {
    setCart((cart) =>
      cart.map((item) =>
        item.item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Calculate total
  const total = cart.reduce((sum, item) => {
    return sum + item.item.price * item.quantity;
  }, 0);

  return (
    <div className="checkoutPage">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <p className={`${styles.price} ${styles.priceTitle}`}>Price</p>
          <hr />
          {cart.map((item) => (
            <CheckoutCard
              key={item.item.id}
              item={item.item}
              quantity={item.quantity}
              updateQuantity={updateQuantity} // Pass the updater
            />
          ))}
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: "24px",
              fontWeight: "bold",
              fontSize: "1.3rem",
            }}
          >
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
