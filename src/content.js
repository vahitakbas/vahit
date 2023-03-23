import React, { useState } from "react";
import axios from "axios";
import { Fade } from "react-slideshow-image";

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

  const fadeProperties = {
    infinite: true,
    indicators: true,
    duralation:10000,
    arrows: false,
  };

  return (
    <>
      <p>
        <button onClick={fetchProducts}>Fetch Products</button>
      </p>
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
                  />
                </div>
                <div className="photoIcon">{product.BrandIconUrl}</div>
                <div className="photoDate"><span className="dateText">{product.RemainingText}</span></div>
                <div className="photoText">{product.Title}</div>
                </div>
                <div className="photoColor"></div>
              </div>
            </div>
          </div>
        ))}
      </Fade>

      {/* <li key={product.Id}>
                  brand color : {product.BrandIconColor}
                  BrandIconUrl :  <img src={product.BrandIconUrl} alt={product.Name} /> 
                  BrandPromotionCardParticipationText : {product.BrandPromotionCardParticipationText}
                  ImageUrl :  <img src={product.ImageUrl} alt={product.Name} /> 
                  ListButtonText :  {product.ListButtonText}  
                  PromotionCardColor :  {product.PromotionCardColor}  
                  RemainingText :  {product.RemainingText}  
                  ScenarioType :  {product.ScenarioType}  
                  SeoName :  {product.SeoName}  
                  Title :  {product.Title}  
                  Unavailable :  {product.Unavailable}  
                  Unvisible :  {product.Unvisible}  
                </li> */}
    </>
  );
}
