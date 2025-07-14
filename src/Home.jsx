import { ShoppingCart } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <header className="header">
        <h1>Platzi Fake Store</h1>
        <h2>Home</h2>
        <h2>Products</h2>
        <div className='checkout'>
          <ShoppingCart />
          Checkout
        </div>
      </header>
      <main className='homepage'>
        <h1>One stop shop for all your shopping needs!</h1>
        <button>Shop Now</button>
      </main>


    </div>
  );
}

export default Home;
