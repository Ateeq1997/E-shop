import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ image, title, price, oldPrice, stars = 5 }) => {
  return (
    <div className="product-item">
      <div className="product-image">
        <Link to="/product-detail">
          <img src={image} alt="Product Image" />
        </Link>
        <div className="product-action">
          <a href="#!"><i className="fa fa-cart-plus"></i></a>
          <a href="#!"><i className="fa fa-heart"></i></a>
          <a href="#!"><i className="fa fa-search"></i></a>
        </div>
      </div>
      <div className="product-content">
        <div className="title"><Link to="/product-detail">{title}</Link></div>
        <div className="ratting">
          {Array.from({ length: stars }).map((_, i) => (
            <i key={i} className="fa fa-star"></i>
          ))}
        </div>
        <div className="price">
          ${price} {oldPrice && <span>${oldPrice}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
