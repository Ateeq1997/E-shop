import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const initialCartItems = [
  { id: 1, image: '/img/product-1.png', name: 'Product Name', price: 22, qty: 1 },
  { id: 2, image: '/img/product-2.png', name: 'Product Name', price: 22, qty: 1 },
  { id: 3, image: '/img/product-3.png', name: 'Product Name', price: 22, qty: 1 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [coupon, setCoupon] = useState('');

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Cart' },
  ];

  const updateQty = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 1;
  const grandTotal = subTotal + shipping;

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
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {cartItems.map(item => (
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
                        <td>${item.price * item.qty}</td>
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

          <div className="row">
            <div className="col-md-6">
              <div className="coupon">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button>Apply Code</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cart-summary">
                <div className="cart-content">
                  <h3>Cart Summary</h3>
                  <p>Sub Total<span>${subTotal}</span></p>
                  <p>Shipping Cost<span>${shipping}</span></p>
                  <h4>Grand Total<span>${grandTotal}</span></h4>
                </div>
                <div className="cart-btn">
                  <button>Update Cart</button>
                  <Link to="/checkout"><button>Checkout</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
