import * as React from "react";

import ProductList from "./breadcrump";
import Product from "./content";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "./popup";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const PopupProductsAPI = () => {
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
    });
  };
  useEffect(() => {
    PopupProductsAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container mt-4">
          <div className="row inlineheader col-md-12">
            <div className="logoImg col-md-3 col-1">
              <img className="logo" src="./logo.png"></img>
            </div>
            <div className="logoafterdiv col-md-9 col-9">
              <div className="col-md-11 loginBtn">
                <button className="girisbtn">
                  <div>Giriş Yap </div>
                </button>
              </div>
              <div className="col-md-1 profileBtn">
                <button className="personbtn">
                  <div>
                    <img className="personheight" src="./person.svg"></img>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="row">
        <ProductList />
      </div>
      <div className="slide-container">
        <Product />
      </div>
      <div className="container-fluid">
        <div className="row footerBar col-md-12">
          <div className="kesfet col-md-4 col-4">KEŞFET</div>
          <div className="footer-logo col-md-4 col-4">
            <img className="footerLogo" src="./footer-logo.png"></img>
          </div>
          <div className="dahaCuzdan col-md-4 col-4">DAHA CÜZDAN</div>
        </div>
      </div>
    </div>
  );
}

export default App;
