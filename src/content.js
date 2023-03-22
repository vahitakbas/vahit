import React, { useState } from 'react'
import axios from 'axios' 
import { Fade } from 'react-slideshow-image';

export default function Product(){
    const [products, setProducts] =  useState([])
    const fetchProducts = ()=>{
    axios({
        url: 'https://api.extrazone.com/promotions/list?Channel=PWA',
        method: 'get',
        headers: {
            'X-Country-Id ': 'TR',
            'X-Language-Id ': 'TR',
            'Content-Type': 'application/json'
        }
     }) 
  .then(response => {
    const products = response.data
    setProducts(products)
  }) }

  const fadeProperties = {
  
    infinite: true,
    indicators: true,
    arrows: false
  }

    return (
        <>
          <p><button onClick={fetchProducts}>Fetch Products</button></p>
          <Fade {...fadeProperties}>
  
          {
            products
              .map(product =>
                <div className="each-slide">
                <div  >
                <div className="each-fade">
              <div className="image-container">
              <img className="" src={product.ImageUrl} alt={product.Title} /> 
              </div>
              <h2>  {product.RemainingText}</h2>
    
            </div>
                
                </div>
              </div>
      
                
              )
          }

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
    )
}

