import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Layout = () => {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState(null);

  return (
    <div>
      <Header cart={cart} />
      <Outlet context={{ cart, setCart, data, setData }} />
      <footer
        style={{
          marginTop: "40px",
          padding: "18px 0",
          textAlign: "center",
          background: "#181818",
          color: "#ffd700",
          fontSize: "1rem",
        }}
      >
        API was fetched from{" "}
        <a
          href="https://fakestoreapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ffd700",
            textDecoration: "underline",
          }}
        >
          FakeStore
        </a>
      </footer>
    </div>
  );
};

export default Layout;
