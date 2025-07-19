import React, { useState } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Card ></Card>
    </div>
  );
}

export default App;
