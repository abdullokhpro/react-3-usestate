import React from "react";
import "./category.scss";
import category1 from "../../assets/category/category1.png";
import { CATEGORY_DATA } from "../../static";

function Category() {
  let categoryData = CATEGORY_DATA?.map((val, inx) => (
    <div key={inx} className="category__card">
      <img src={val.url} alt="" />
      <div className="category__card__left">
        <h3 className="category__card__title">{val.title}</h3>
        <p className="category__card__text">{val.text}</p>
      </div>
    </div>
  ));

  return (
    <section className="category">
      <div className="container">
        <div className="category__cards">{categoryData}</div>
      </div>
    </section>
  );
}

export default Category;
