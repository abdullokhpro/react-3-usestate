import React from "react";
import Hero from "../hero/Hero";
import Category from "../category/Category";
import Product from "../products/Product";
import Clinets from "../clients/Clinets";
import Newsletter from "../newsletter/Newsletter";

function Main() {
  return (
    <main>
      <Hero />
      <Category />
      <Product />
      <Clinets />
      <Newsletter />
    </main>
  );
}

export default Main;
