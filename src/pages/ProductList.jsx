import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import ProductItem from '../components/ProductItem';
import Sidebar from '../components/Sidebar';

const products = [
  { id: 1, image: '/img/product-1.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 2, image: '/img/product-2.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 3, image: '/img/product-3.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 4, image: '/img/product-4.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 5, image: '/img/product-5.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 6, image: '/img/product-6.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 7, image: '/img/product-7.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 8, image: '/img/product-8.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
  { id: 9, image: '/img/product-9.png', title: 'Phasellus Gravida', price: 22, oldPrice: 25 },
];

const ProductList = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [search, setSearch] = useState('');

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Product List' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="product-view">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="product-search">
                        <input
                          type="text"
                          placeholder="Search"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                        <button><i className="fa fa-search"></i></button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-short" style={{ position: 'relative' }}>
                        <div className="dropdown">
                          <a
                            href="#!"
                            className="dropdown-toggle"
                            onClick={(e) => { e.preventDefault(); setSortOpen(!sortOpen); }}
                          >
                            Product short by
                          </a>
                          {sortOpen && (
                            <div className="dropdown-menu dropdown-menu-right show">
                              <a href="#!" className="dropdown-item" onClick={() => setSortOpen(false)}>Newest</a>
                              <a href="#!" className="dropdown-item" onClick={() => setSortOpen(false)}>Popular</a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {products.map((p) => (
                  <div key={p.id} className="col-lg-4">
                    <ProductItem
                      image={p.image}
                      title={p.title}
                      price={p.price}
                      oldPrice={p.oldPrice}
                    />
                  </div>
                ))}

                <div className="col-lg-12">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <a className="page-link" href="#!">Previous</a>
                      </li>
                      <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                      <li className="page-item"><a className="page-link" href="#!">2</a></li>
                      <li className="page-item"><a className="page-link" href="#!">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#!">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
