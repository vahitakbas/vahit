import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Popup() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const fetchProducts = () => {
    axios({
      url: "https://api.extrazone.com/promotions?Id=61",
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
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Button className="dahaBtn" variant="outlined" onClick={handleClickOpen}>
        DAHA DAHA
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose}>

          <Toolbar mb={-5}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>

        <div className="container">
          <div>
            <img
              className="detailsphoto"
              src={products.ImageUrl}
              alt={products.Title}
            />
          </div>
          <div>
            <img
              className="detailsicon"
              src={products.BrandIconUrl}
              alt={products.Title}
            />
          </div>
          <div className="detailstitle">
            {products.Title}
          </div>
          <div className="detailsdescription">{products.Description}</div>
          <div>
            <button className="hemenkatilbutton">Hemen Katıl</button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
