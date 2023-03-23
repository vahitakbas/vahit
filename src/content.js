import React, { useState } from "react";
import axios from "axios";
import { Fade } from "react-slideshow-image";
import { useEffect } from "react";
import Popup from "./popup";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Product() {
  const [products, setProducts] = useState([]);
  const fetchProducts = () => {
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

  useEffect(() => {
    fetchProducts()
  }, []);

  const fadeProperties = {
    infinite: true,
    indicators: true,
    duralation: 10000,
    arrows: false,
  };

  return (
    <>
      <Fade {...fadeProperties}>
        {products.map((product) => (
          <div className="each-slide">
            <div>
              <div className="each-fade">
                <div className="photoBackground">
                  <div className="image-container">
                    <img
                      className="photo"
                      src={product.ImageUrl}
                      alt={product.Title}
                    ></img>
                    <div className="photoIcon">
                      <img className="photoIcons" src={"/photoIcon.png"} />
                    </div>
                    <div className="photoDate">{product.RemainingText}</div>
                  </div>
                  <div className="photoText">{product.Title}</div>
                  <div className="popup"><Popup></Popup></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Fade>

    </>
  );
}
