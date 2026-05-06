import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [pagesOpen, setPagesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'nav-item nav-link active' : 'nav-item nav-link';

  return (
    <div className="header">
      <div className="container">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <Link to="/" className="navbar-brand">MENU</Link>
          <button
            type="button"
            className="navbar-toggler"
            onClick={() => setCollapsed(!collapsed)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse justify-content-between${collapsed ? '' : ' show'}`} id="navbarCollapse">
            <div className="navbar-nav m-auto">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/products" className={isActive('/products')}>Products</Link>
              <div className="nav-item dropdown" style={{ position: 'relative' }}>
                <a
                  href="#!"
                  className="nav-link dropdown-toggle"
                  onClick={(e) => { e.preventDefault(); setPagesOpen(!pagesOpen); }}
                >
                  Pages
                </a>
                {pagesOpen && (
                  <div className="dropdown-menu show">
                    <Link to="/products" className="dropdown-item" onClick={() => setPagesOpen(false)}>Product</Link>
                    <Link to="/product-detail" className="dropdown-item" onClick={() => setPagesOpen(false)}>Product Detail</Link>
                    <Link to="/cart" className="dropdown-item" onClick={() => setPagesOpen(false)}>Cart</Link>
                    <Link to="/wishlist" className="dropdown-item" onClick={() => setPagesOpen(false)}>Wishlist</Link>
                    <Link to="/checkout" className="dropdown-item" onClick={() => setPagesOpen(false)}>Checkout</Link>
                    <Link to="/login" className="dropdown-item" onClick={() => setPagesOpen(false)}>Login &amp; Register</Link>
                    <Link to="/my-account" className="dropdown-item" onClick={() => setPagesOpen(false)}>My Account</Link>
                  </div>
                )}
              </div>
              <Link to="/contact" className={isActive('/contact')}>Contact Us</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
