import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const initialWishlistItems = [
  { id: 1, image: '/img/product-1.png', name: 'Product Name', price: 22, qty: 1 },
  { id: 2, image: '/img/product-2.png', name: 'Product Name', price: 22, qty: 1 },
  { id: 3, image: '/img/product-3.png', name: 'Product Name', price: 22, qty: 1 },
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Wishlist' },
  ];

  const updateQty = (id, delta) => {
    setWishlistItems(items =>
      items.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="cart-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Add to Cart</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {wishlistItems.map(item => (
                      <tr key={item.id}>
                        <td><Link to="/product-detail"><img src={item.image} alt="Product" /></Link></td>
                        <td><Link to="/product-detail">{item.name}</Link></td>
                        <td>${item.price}</td>
                        <td>
                          <div className="qty">
                            <button className="btn-minus" onClick={() => updateQty(item.id, -1)}>
                              <i className="fa fa-minus"></i>
                            </button>
                            <input type="text" value={item.qty} readOnly />
                            <button className="btn-plus" onClick={() => updateQty(item.id, 1)}>
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td><button>Add to Cart</button></td>
                        <td>
                          <button onClick={() => removeItem(item.id)}>
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
