import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Store } from "lucide-react";
import styles from "./Header.module.css";

const Header = ({ cart }) => {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center bg-gray-900 text-gray-100">
      <h1 className="flex gap-2 items-center">
        <Store size={24} />
        <Link to="/" className="text-3xl">
          Fake Store
        </Link>
      </h1>
      <nav className="flex gap-5 items-center text-2xl">
        <Link
          to="/"
          className={`p-3  rounded-lg transition ${
            location.pathname === "/"
              ? "bg-gray-300 text-black"
              : "hover:text-black hover:bg-gray-300"
          }`}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={`p-3  rounded-lg transition ${
            location.pathname === "/products"
              ? "bg-gray-300 text-black"
              : "hover:text-black hover:bg-gray-300"
          }`}
        >
          Products
        </Link>
      </nav>
      <div className="flex items-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg gap-2">
        <ShoppingCart size={22} />
        <Link to="/checkout">Checkout</Link>
        <p>{cart.length > 0 ? cart.length : ""}</p>
      </div>
    </header>
    // <header className={styles.header}>
    //   <h1>
    //     <Link to="/" className={styles.navLink}>
    //       Fake Store
    //     </Link>
    //     <Store size={28} />
    //   </h1>
    //   <nav className={styles.navLinks}>
    //     <Link
    //       to="/"
    //       className={`${styles.navLink} ${
    //         location.pathname === "/" ? styles.active : ""
    //       }`}
    //     >
    //       Home
    //     </Link>
    //     <Link
    //       to="/products"
    //       className={`${styles.navLink} ${
    //         location.pathname === "/products" ? styles.active : ""
    //       }`}
    //     >
    //       Products
    //     </Link>
    //   </nav>
    //   <div className={styles.checkout}>
    //     <ShoppingCart size={22} />
    //     <Link to="/checkout">Checkout</Link>
    //     <p>{cart.length > 0 ? cart.length : ""}</p>
    //   </div>
    // </header>
  );
};

export default Header;
