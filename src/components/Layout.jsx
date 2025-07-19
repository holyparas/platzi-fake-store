import {Outlet, Link} from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Layout = () => {

  const [cart, setCart] = useState([]);
  
  return (
    <div>
      <Header></Header>
      <Outlet context={{cart, setCart}} />
    </div>
  );
}

export default Layout;
