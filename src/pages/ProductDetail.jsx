import React, { useState } from 'react';
import Slider from 'react-slick';
import Breadcrumb from '../components/Breadcrumb';
import ProductItem from '../components/ProductItem';
import Sidebar from '../components/Sidebar';

const relatedProducts = [
  { id: 1, image: '/img/product-1.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 2, image: '/img/product-2.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 3, image: '/img/product-3.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 4, image: '/img/product-4.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 5, image: '/img/product-5.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
];

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [qty, setQty] = useState(1);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Product Details' },
  ];

  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const relatedSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="product-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row align-items-center product-detail-top">
                <div className="col-md-5">
                  <div className="product-slider-single">
                    <Slider {...imageSliderSettings}>
                      <img src="/img/product-1.png" alt="Product" />
                      <img src="/img/product-2.png" alt="Product" />
                      <img src="/img/product-3.png" alt="Product" />
                    </Slider>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="product-content">
                    <div className="title"><h2>Phasellus Gravida</h2></div>
                    <div className="ratting">
                      {[1,2,3,4,5].map(i => <i key={i} className="fa fa-star"></i>)}
                    </div>
                    <div className="price">$22 <span>$25</span></div>
                    <div className="details">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi
                        viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus
                        tempor hendrerit finibus.
                      </p>
                    </div>
                    <div className="quantity">
                      <h4>Quantity:</h4>
                      <div className="qty">
                        <button className="btn-minus" onClick={() => setQty(q => Math.max(1, q - 1))}>
                          <i className="fa fa-minus"></i>
                        </button>
                        <input type="text" value={qty} onChange={(e) => setQty(Number(e.target.value))} />
                        <button className="btn-plus" onClick={() => setQty(q => q + 1)}>
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="action">
                      <a href="#!"><i className="fa fa-cart-plus"></i></a>
                      <a href="#!"><i className="fa fa-heart"></i></a>
                      <a href="#!"><i className="fa fa-search"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row product-detail-bottom">
                <div className="col-lg-12">
                  <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                      <a
                        className={`nav-link${activeTab === 'description' ? ' active' : ''}`}
                        href="#!"
                        onClick={(e) => { e.preventDefault(); setActiveTab('description'); }}
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link${activeTab === 'specification' ? ' active' : ''}`}
                        href="#!"
                        onClick={(e) => { e.preventDefault(); setActiveTab('specification'); }}
                      >
                        Specification
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link${activeTab === 'reviews' ? ' active' : ''}`}
                        href="#!"
                        onClick={(e) => { e.preventDefault(); setActiveTab('reviews'); }}
                      >
                        Reviews (1)
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    {activeTab === 'description' && (
                      <div className="container">
                        <h4>Product description</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi
                          viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus
                          tempor hendrerit finibus. Nulla tristique viverra nisl, sit amet bibendum ante
                          suscipit non. Praesent in faucibus tellus, sed gravida lacus.
                        </p>
                      </div>
                    )}
                    {activeTab === 'specification' && (
                      <div className="container">
                        <h4>Product specification</h4>
                        <ul>
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                      </div>
                    )}
                    {activeTab === 'reviews' && (
                      <div className="container">
                        <div className="reviews-submitted">
                          <div className="reviewer">Phasellus Gravida - <span>01 Jan 2020</span></div>
                          <div className="ratting">
                            {[1,2,3,4,5].map(i => <i key={i} className="fa fa-star"></i>)}
                          </div>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam.
                          </p>
                        </div>
                        <div className="reviews-submit">
                          <h4>Give your Review:</h4>
                          <div className="ratting">
                            {[1,2,3,4,5].map(i => <i key={i} className="fa fa-star-o"></i>)}
                          </div>
                          <div className="row form">
                            <div className="col-sm-6">
                              <input type="text" placeholder="Name" />
                            </div>
                            <div className="col-sm-6">
                              <input type="email" placeholder="Email" />
                            </div>
                            <div className="col-sm-12">
                              <textarea placeholder="Review"></textarea>
                            </div>
                            <div className="col-sm-12">
                              <button>Submit</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="section-header">
                  <h3>Related Products</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet
                    ultricies. Nullam consequat, mauris non interdum cursus
                  </p>
                </div>
              </div>

              <div className="row align-items-center product-slider product-slider-3">
                <Slider {...relatedSliderSettings} style={{ width: '100%' }}>
                  {relatedProducts.map((p) => (
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

            <div className="col-lg-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
