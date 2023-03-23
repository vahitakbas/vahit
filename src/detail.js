import React, { useState } from "react";
import axios from "axios"; 

export default function Detail() {
  const [products, setProducts] = useState([]);
  const fetchProducts = () => {
    axios({
      url: "https://api.extrazone.com/promotions?Id=33",
      method: "get",
      headers: {
        "X-Country-Id ": "TR",
        "X-Language-Id ": "TR",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      const products = response.data;
      setProducts(products);
    });
  };
 

  return (
    <>
      <p>
        <button onClick={fetchProducts}>Fetch Products</button>
      </p>
      <img src={products.BrandIconUrl} />
{products.Title}
      
    </>
  );
}
