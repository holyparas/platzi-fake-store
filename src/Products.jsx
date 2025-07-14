import { useEffect, useState } from 'react';

const Products = () => {

  const [data, setData] = useState("");

  const url = 'https://api.escuelajs.co/api/v1/products';

  useEffect(() => {
    fetch(url).then((res) => res.json())
    .then((data) => {
      console.log(data);
      setData(data);
    })
  }, []);


  return (
    <div>
      <h1>This is Products page!</h1>
    </div>
  );
}

export default Products;
