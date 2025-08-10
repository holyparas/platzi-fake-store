import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Store } from "lucide-react";
import styles from "./Header.module.css";

const Header = ({ cart }) => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <h1>
        <Link to="/" className={styles.navLink}>
          Fake Store
        </Link>
        <Store size={28} />
      </h1>
      <nav className={styles.navLinks}>
        <Link
          to="/"
          className={`${styles.navLink} ${
            location.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={`${styles.navLink} ${
            location.pathname === "/products" ? styles.active : ""
          }`}
        >
          Products
        </Link>
      </nav>
      <div className={styles.checkout}>
        <ShoppingCart size={22} />
        <Link to="/checkout">Checkout</Link>
        <p>{cart.length > 0 ? cart.length : ""}</p>
      </div>
    </header>
  );
};

export default Header;
