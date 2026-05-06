import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <div className="top-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="logo">
              <Link to="/">
                <img src="/img/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="search">
              <input type="text" placeholder="Search" />
              <button><i className="fa fa-search"></i></button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="user">
              <div className="dropdown" style={{ position: 'relative' }}>
                <a
                  href="#!"
                  className="dropdown-toggle"
                  onClick={(e) => { e.preventDefault(); setAccountOpen(!accountOpen); }}
                >
                  My Account
                </a>
                {accountOpen && (
                  <div className="dropdown-menu show">
                    <Link to="/login" className="dropdown-item" onClick={() => setAccountOpen(false)}>Login</Link>
                    <Link to="/login" className="dropdown-item" onClick={() => setAccountOpen(false)}>Register</Link>
                  </div>
                )}
              </div>
              <div className="cart">
                <Link to="/cart">
                  <i className="fa fa-cart-plus" style={{ color: '#fff' }}></i>
                </Link>
                <span>(0)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
