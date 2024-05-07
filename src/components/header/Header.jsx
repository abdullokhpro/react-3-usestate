import React, { useState } from "react";
import "./header.scss";
import headerLogo from "../../assets/header/header-logo.svg";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { HEADER_DATA } from "../../static";

function Header() {
  const [show, setShow] = useState(false);
  const headerData = HEADER_DATA?.map((val, inx) => (
    <li key={inx} className="header__item">
      <a className="header__link" href="#">
        {val}
      </a>
    </li>
  ));
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__logo">
            <a className="header__logo__link" href="#">
              <img src={headerLogo} alt="here is the logo of webite" />
            </a>
          </div>
          <ul className={`header__list ${show ? "show" : ""}`}>{headerData}</ul>
          <div className="header__btns">
            <CiSearch className="header__btns__btn" />
            <CiUser className="header__btns__btn" />
            <CiShoppingCart className="header__btns__btn" />
            <AiOutlineMenu
              onClick={() => setShow(true)}
              className="header__btns__btn header__btns__menu"
            />

            {show ? (
              <div
                onClick={() => setShow(false)}
                className="header__menu__overlay"
              ></div>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
