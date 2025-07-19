import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { useOutletContext } from 'react-router-dom';
const Products = () => {

  const {cart, setCart} = useOutletContext();
  const [data, setData] = useState("");

  const url = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(url).then((res) => res.json())
    .then((fetchData) => {
      console.log(fetchData);
      setData(fetchData);
    })
  }, []);

  console.log("state data: ", data);
  return (
    <div>
      <div className="card-grid">
        {data && data.map((item) => {
          return <Card key={item.id} image={item.image} price={item.price} name={item.title} rating={item.rating} cart = {cart} setCart={setCart}/>
        })}
      </div>

    </div>
  );
}

export default Products;
