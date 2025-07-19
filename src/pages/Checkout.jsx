import { useOutletContext } from "react-router-dom";
import CheckoutCard from "../components/CheckoutCard";
import styles from "../components/CheckoutCard.module.css";

const Checkout = () => {
  const { cart, setCart } = useOutletContext();

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkoutPage">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <div>
          <p className={`${styles.price} ${styles.priceTitle}`}>Price</p>
          <hr />
          {cart.map((item) => (
            <CheckoutCard
              key={item.key}
              image={item.image}
              price={item.price}
              name={item.name}
              quantity={item.quantity}
            />
          ))}
          <hr />
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "24px",
            fontWeight: "bold",
            fontSize: "1.3rem"
          }}>
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
