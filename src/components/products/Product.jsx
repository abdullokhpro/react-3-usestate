import React, { useEffect, useState } from "react";
import "./products.scss";
import product1 from "../../assets/products/product1.png";
import { PRODUCT_DATA } from "../../static";
import mainUrl from "../../api";
import Loading from "../loading/Loading";
import { CiCircleMore } from "react-icons/ci";
import More from "../more/More";

function Product() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const [more, setMore] = useState(null);
  let perPageCount = 3;

  document.body.style.overflow = more ? "hidden" : "auto";

  useEffect(() => {
    setLoading(true);
    mainUrl
      .get(`/products`, {
        params: {
          limit: offset * perPageCount,
        },
      })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [offset]);

  let productCard = products?.map((el) => (
    <div key={el.id} className="product__card">
      <div className="product__card__top">
        <img src={el.images[0]} alt={el.title} />
      </div>
      <h4 className="product__card__title">{el.title}</h4>
      <div className="product__card__cost">
        <p className="product__old__price">{el.price}</p>
        <p className="product__new__price">${el.stock}</p>
      </div>
      <div className="product__info">
        <button onClick={() => setMore(el)} className="product__info__more-btn">
          <CiCircleMore className="product__info__icon" />
        </button>
      </div>
    </div>
  ));
  return (
    <section className="product">
      <div className="container">
        <h3 className="product__subtitle">Find your favourite smart watch.</h3>
        <h2 className="product__title">Our Latest Products</h2>
        <div className="product__cards">{productCard}</div>
        {loading ? <Loading /> : <></>}

        <button
          onClick={() => setOffset((p) => p + 1)}
          className="product__btn"
        >
          add more
        </button>
      </div>
      {more ? <More data={more} close={setMore} /> : <></>}
    </section>
  );
}

export default Product;
