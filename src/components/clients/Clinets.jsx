import React from "react";
import "./clinets.scss";
import client1 from "../../assets/clients/client1.png";
import client2 from "../../assets/clients/client2.png";
import star from "../../assets/clients/client-star.png";

const Clinets = () => {
  return (
    <section className="client">
      <div className="container">
        <h3 className="client__subtitle">
          Here are our some of the best clients.
        </h3>
        <h2 className="client__title">What People Say About Us</h2>

        <div className="client__cards">
          <div className="client__card">
            <img src={client1} alt="" />
            <div className="client__content">
              <h3 className="client__content__title">Hamza Faizi</h3>
              <p className="client__content__text">
                Don’t waste time, just order! This is the best website to
                puschase smart watches.
              </p>
              <img src={star} alt="" />
            </div>
          </div>
          <div className="client__card">
            <img src={client2} alt="" />
            <div className="client__content">
              <h3 className="client__content__title">Hamza Faizi</h3>
              <p className="client__content__text">
                Don’t waste time, just order! This is the best website to
                puschase smart watches.
              </p>
              <img src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinets;
