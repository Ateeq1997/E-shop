import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'User', path: '#' },
    { label: 'My Account' },
  ];

  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'orders', label: 'Orders' },
    { id: 'payment', label: 'Payment Method' },
    { id: 'address', label: 'Address' },
    { id: 'account', label: 'Account Details' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="my-account">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="nav flex-column nav-pills" role="tablist">
                {navItems.map(item => (
                  <a
                    key={item.id}
                    className={`nav-link${activeTab === item.id ? ' active' : ''}`}
                    href="#!"
                    onClick={(e) => { e.preventDefault(); setActiveTab(item.id); }}
                  >
                    {item.label}
                  </a>
                ))}
                <Link className="nav-link" to="/">Logout</Link>
              </div>
            </div>

            <div className="col-md-9">
              <div className="tab-content">
                {activeTab === 'dashboard' && (
                  <div>
                    <h4>Dashboard</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi
                      viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus
                      tempor hendrerit finibus.
                    </p>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="thead-dark">
                        <tr>
                          <th>No</th>
                          <th>Product</th>
                          <th>Date</th>
                          <th>Price</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3].map(n => (
                          <tr key={n}>
                            <td>{n}</td>
                            <td>Product Name</td>
                            <td>01 Jan 2020</td>
                            <td>$22</td>
                            <td>Approved</td>
                            <td><button>View</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'payment' && (
                  <div>
                    <h4>Payment Method</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi
                      viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in.
                    </p>
                  </div>
                )}

                {activeTab === 'address' && (
                  <div>
                    <h4>Address</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <h5>Payment Address</h5>
                        <p>123 Payment Street, Los Angeles, CA</p>
                        <p>Mobile: 012-345-6789</p>
                        <button>Edit Address</button>
                      </div>
                      <div className="col-md-6">
                        <h5>Shipping Address</h5>
                        <p>123 Shipping Street, Los Angeles, CA</p>
                        <p>Mobile: 012-345-6789</p>
                        <button>Edit Address</button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'account' && (
                  <div>
                    <h4>Account Details</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <label>First Name</label>
                        <input className="form-control" type="text" placeholder="First Name" defaultValue="John" />
                      </div>
                      <div className="col-md-6">
                        <label>Last Name</label>
                        <input className="form-control" type="text" placeholder="Last Name" defaultValue="Doe" />
                      </div>
                      <div className="col-md-6">
                        <label>E-mail</label>
                        <input className="form-control" type="email" placeholder="E-mail" defaultValue="email@example.com" />
                      </div>
                      <div className="col-md-6">
                        <label>Mobile No</label>
                        <input className="form-control" type="text" placeholder="Mobile No" defaultValue="+123-456-7890" />
                      </div>
                      <div className="col-md-12" style={{ marginTop: '10px' }}>
                        <button style={{ padding: '8px 25px', border: 'none', background: '#3F69AA', color: '#fff' }}>
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
