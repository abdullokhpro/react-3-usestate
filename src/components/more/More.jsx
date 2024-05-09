import React from "react";
import "./more.scss";
import { IoMdExit } from "react-icons/io";

const More = ({ data, close }) => {
  return (
    <div className="production">
      <div onClick={() => close(null)} className="production__overlay"></div>
      <div className="production__detail">
        <button className="production__detail__exit">
          <IoMdExit
            onClick={() => close(null)}
            className="production__exit__icon"
          />
        </button>

        <div className="production__content">
          <p className="production__info">
            <span>Name:</span> {data.title}
          </p>
          <p className="production__info">
            <span>discount:</span> {data.discountPercentage}%
          </p>
          <p className="production__info">
            <span>brand:</span> {data.brand}
          </p>
          <p className="production__info">
            <span>category:</span> {data.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default More;
