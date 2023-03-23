import React, { useState } from "react";
import axios from "axios";
import "./content";
import { useEffect } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios({
      url: "https://api.extrazone.com/tags/list",
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

  useEffect(() => {
    fetchProducts()
  }, []);

  const contentProducts = () => {
    axios({
      url: "https://api.extrazone.com/promotions/list?Channel=PWA",
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
      <div className="scr">
        <div className="list">
          <div className="list-item">
            <span className="list-text" >Tümü</span>
          </div>
          {products.map((product) => (
            <div className="list-item" key={product.Id}>
              <img
                className="list-img"
                src={product.IconUrl}
                alt={product.Name}
              />
              <span className="list-text">{product.Name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
