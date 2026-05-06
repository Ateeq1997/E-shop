import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';

const featuredProducts = [
  { id: 1, image: '/img/product-1.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 2, image: '/img/product-2.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 3, image: '/img/product-3.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 4, image: '/img/product-4.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 5, image: '/img/product-5.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
];

const recentProducts = [
  { id: 1, image: '/img/product-2.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 2, image: '/img/product-4.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 3, image: '/img/product-6.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 4, image: '/img/product-8.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 5, image: '/img/product-9.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
];

const brands = [
  '/img/brand-1.png',
  '/img/brand-2.png',
  '/img/brand-3.png',
  '/img/brand-4.png',
  '/img/brand-5.png',
  '/img/brand-6.png',
];

const Home = () => {
  const [email, setEmail] = useState('');

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const productSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  const brandSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <>
      {/* Main Slider */}
      <div className="home-slider">
        <Slider {...mainSliderSettings}>
          <div className="main-slider-item"><img src="/img/slider-1.jpg" alt="Slider" /></div>
          <div className="main-slider-item"><img src="/img/slider-2.jpg" alt="Slider" /></div>
          <div className="main-slider-item"><img src="/img/slider-3.jpg" alt="Slider" /></div>
        </Slider>
      </div>

      {/* Feature */}
      <div className="feature">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-shield"></i>
                <div>
                  <h2>Trusted Shopping</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-shopping-bag"></i>
                <div>
                  <h2>Quality Product</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-truck"></i>
                <div>
                  <h2>Worldwide Delivery</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-phone"></i>
                <div>
                  <h2>Telephone Support</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="category">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="category-img">
                <img src="/img/category-1.jpg" alt="Category" />
                <Link className="category-name" to="/products">
                  <h2>Category Name</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-img">
                <img src="/img/category-3.jpg" alt="Category" />
                <Link className="category-name" to="/products">
                  <h2>Category Name</h2>
                </Link>
              </div>
              <div className="category-img">
                <img src="/img/category-4.jpg" alt="Category" />
                <Link className="category-name" to="/products">
                  <h2>Category Name</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-img">
                <img src="/img/category-2.jpg" alt="Category" />
                <Link className="category-name" to="/products">
                  <h2>Category Name</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="featured-product">
        <div className="container">
          <div className="section-header">
            <h3>Featured Product</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet
              ultricies. Nullam consequat, mauris non interdum cursus
            </p>
          </div>
          <div className="row align-items-center product-slider product-slider-4">
            <Slider {...productSliderSettings} style={{ width: '100%' }}>
              {featuredProducts.map((p) => (
                <div key={p.id} style={{ padding: '0 10px' }}>
                  <ProductItem
                    image={p.image}
                    title={p.title}
                    price={p.price}
                    oldPrice={p.oldPrice}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter">
        <div className="container">
          <div className="section-header">
            <h3>Subscribe Our Newsletter</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet
              ultricies. Nullam consequat, mauris non interdum cursus
            </p>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>Submit</button>
          </div>
        </div>
      </div>

      {/* Recent Products */}
      <div className="recent-product">
        <div className="container">
          <div className="section-header">
            <h3>Recent Product</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet
              ultricies. Nullam consequat, mauris non interdum cursus
            </p>
          </div>
          <div className="row align-items-center product-slider product-slider-4">
            <Slider {...productSliderSettings} style={{ width: '100%' }}>
              {recentProducts.map((p) => (
                <div key={p.id} style={{ padding: '0 10px' }}>
                  <ProductItem
                    image={p.image}
                    title={p.title}
                    price={p.price}
                    oldPrice={p.oldPrice}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="brand">
        <div className="container">
          <div className="section-header">
            <h3>Our Brands</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet
              ultricies. Nullam consequat, mauris non interdum cursus
            </p>
          </div>
          <div className="brand-slider">
            <Slider {...brandSliderSettings}>
              {brands.map((src, i) => (
                <div key={i} className="brand-item">
                  <img src={src} alt={`Brand ${i + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
