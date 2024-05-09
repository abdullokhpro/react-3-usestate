import React from "react";
import "./newsletter.scss";
import { IoSearch } from "react-icons/io5";
import newsletterImg from "../../assets/newsletter/watch-img.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container newsletter__container">
        <div className="newsletter__item">
          <div className="newsletter__item__left">
            <h2 className="newsletter__title">Subscribe To Newsletter</h2>
            <p className="newsletter__text">
              Get free guide about smart watches daily.
            </p>

            <form className="hero__form">
              <input className="hero__form__search" type="search" />
              <IoSearch className="hero__form__search__icon" />
              <button className="hero__form__btn">search</button>
            </form>
          </div>
          <div className="newsletter__item__right">
            <img src={newsletterImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
