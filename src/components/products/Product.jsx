import React from "react";
import "./products.scss";
import product1 from "../../assets/products/product1.png";
import { PRODUCT_DATA } from "../../static";

function Product() {
  let productCard = PRODUCT_DATA?.map((el) => (
    <div className="product__card">
      <div className="product__card__top">
        <img src={el.url} alt="here is the image of watch" />
      </div>
      <h4 className="product__card__title">{el.title}</h4>
      <div className="product__card__cost">
        <p className="product__old__price">{el ? el.oldPrice : ""}</p>
        <p className="product__new__price">${el.newPrice}</p>
      </div>
    </div>
  ));
  return (
    <section className="product">
      <div className="container">
        <h3 className="product__subtitle">Find your favourite smart watch.</h3>
        <h2 className="product__title">Our Latest Products</h2>
        <div className="product__cards">{productCard}</div>
      </div>
    </section>
  );
}

export default Product;
