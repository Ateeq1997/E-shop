import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const Login = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'User', path: '#' },
    { label: 'Login' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="login">
        <div className="container">
          <div className="section-header">
            <h3>User Registration &amp; Login</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet
              ultricies. Nullam consequat, mauris non interdum cursus
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="login-form">
                <h3>Login</h3>
                <div className="row">
                  <div className="col-md-12">
                    <label>E-mail / Username</label>
                    <input className="form-control" type="text" placeholder="E-mail or Username" />
                  </div>
                  <div className="col-md-12">
                    <label>Password</label>
                    <input className="form-control" type="password" placeholder="Password" />
                  </div>
                  <div className="col-md-12">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="keepSignedIn" />
                      <label className="custom-control-label" htmlFor="keepSignedIn">Keep me signed in</label>
                    </div>
                  </div>
                  <div className="col-md-12" style={{ marginTop: '10px' }}>
                    <button className="btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="register-form">
                <h3>Register</h3>
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
                  <div className="col-md-12" style={{ marginTop: '10px' }}>
                    <button className="btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
