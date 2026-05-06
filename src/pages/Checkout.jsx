import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const paymentMethods = [
  { id: 'payment-1', label: 'Paypal' },
  { id: 'payment-2', label: 'Payoneer' },
  { id: 'payment-3', label: 'Check Payment' },
  { id: 'payment-4', label: 'Direct Bank Transfer' },
  { id: 'payment-5', label: 'Cash on Delivery' },
];

const AddressForm = ({ title }) => (
  <div className={title === 'Billing Address' ? 'billing-address' : 'shipping-address'}>
    <h2>{title}</h2>
    <div className="row">
      <div className="col-md-6">
        <label>First Name</label>
        <input className="form-control" type="text" placeholder="First Name" />
      </div>
      <div className="col-md-6">
        <label>Last Name</label>
        <input className="form-control" type="text" placeholder="Last Name" />
      </div>
      <div className="col-md-6">
        <label>E-mail</label>
        <input className="form-control" type="email" placeholder="E-mail" />
      </div>
      <div className="col-md-6">
        <label>Mobile No</label>
        <input className="form-control" type="text" placeholder="Mobile No" />
      </div>
      <div className="col-md-12">
        <label>Address</label>
        <input className="form-control" type="text" placeholder="Address" />
      </div>
      <div className="col-md-6">
        <label>Country</label>
        <select className="custom-select">
          <option>United States</option>
          <option>Afghanistan</option>
          <option>Albania</option>
          <option>Algeria</option>
        </select>
      </div>
      <div className="col-md-6">
        <label>City</label>
        <input className="form-control" type="text" placeholder="City" />
      </div>
      <div className="col-md-6">
        <label>State</label>
        <input className="form-control" type="text" placeholder="State" />
      </div>
      <div className="col-md-6">
        <label>ZIP Code</label>
        <input className="form-control" type="text" placeholder="ZIP Code" />
      </div>
    </div>
  </div>
);

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [createAccount, setCreateAccount] = useState(false);
  const [shipDifferent, setShipDifferent] = useState(false);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Checkout' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="checkout">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <AddressForm title="Billing Address" />

              <div className="col-md-12" style={{ marginBottom: '15px' }}>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="newaccount"
                    checked={createAccount}
                    onChange={(e) => setCreateAccount(e.target.checked)}
                  />
                  <label className="custom-control-label" htmlFor="newaccount">Create an account</label>
                </div>
              </div>
              <div className="col-md-12" style={{ marginBottom: '15px' }}>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="shipto"
                    checked={shipDifferent}
                    onChange={(e) => setShipDifferent(e.target.checked)}
                  />
                  <label className="custom-control-label" htmlFor="shipto">Ship to different address</label>
                </div>
              </div>

              {shipDifferent && <AddressForm title="Shipping Address" />}
            </div>

            <div className="col-md-5">
              <div className="checkout-summary">
                <h2>Cart Total</h2>
                <div className="checkout-content">
                  <h3>Products</h3>
                  <p>Product Name<span>$11</span></p>
                  <p>Product Name<span>$11</span></p>
                  <p>Product Name<span>$11</span></p>
                  <p className="sub-total">Sub Total<span>$33</span></p>
                  <p className="ship-cost">Shipping Cost<span>$1</span></p>
                  <h4>Grand Total<span>$34</span></h4>
                </div>
              </div>

              <div className="checkout-payment">
                <h2>Payment Methods</h2>
                <div className="payment-methods">
                  {paymentMethods.map(method => (
                    <div key={method.id} className="payment-method">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id={method.id}
                          name="payment"
                          value={method.id}
                          checked={selectedPayment === method.id}
                          onChange={() => setSelectedPayment(method.id)}
                        />
                        <label className="custom-control-label" htmlFor={method.id}>{method.label}</label>
                      </div>
                      {selectedPayment === method.id && (
                        <div className="payment-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt orci
                            ac eros volutpat maximus lacinia quis diam.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="checkout-btn">
                  <button>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
