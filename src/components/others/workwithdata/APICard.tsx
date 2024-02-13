import { useState } from "react";

type Data = {
  id: string;
  collection: "product";
  data: {
    name: string;
    price: number;
    color: string;
    brand: string;
    category:
    | "Automotive"
    | "Home & Garden"
    | "Fashion"
    | "Electronics"
    | "Toys";
  }
}

const APICard = () => {
  const [products, setProducts] = useState([]);

  const style = {
    background: 'black',
    color: 'white',
    padding: '0.25rem 1rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
};

  const handleClick = async () => {
    const res = await fetch('/others/workwithdata/endpoint.json');
    const data = await res.json();
    setProducts(data)
  }

  return (
    <div>
      <p>Get more items</p>
      {products.length > 0 && products.map((p: Data) => <p key={p.id}>{p.data.name}</p>)}
      <button onClick={handleClick} style={style}>Get it</button>
    </div>
  );
};

export default APICard;