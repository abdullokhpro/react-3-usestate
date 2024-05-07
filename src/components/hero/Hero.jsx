import React from "react";
import "./hero.scss";
import heroWatch from "../../assets/hero/hero-watch.png";
import { IoSearch } from "react-icons/io5";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__left">
          <h1 className="hero__title">Discover Most Suitable Watches</h1>
          <p className="hero__text">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>

          <form className="hero__form">
            <input className="hero__form__search" type="search" />
            <IoSearch className="hero__form__search__icon" />
            <button className="hero__form__btn">search</button>
          </form>
        </div>
        <div className="hero__right">
          <img
            src={heroWatch}
            alt="here is the image of watch in hero section"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
