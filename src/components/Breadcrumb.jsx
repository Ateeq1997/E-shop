import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb-wrap">
      <div className="container">
        <ul className="breadcrumb">
          {items.map((item, index) => (
            <li
              key={index}
              className={`breadcrumb-item${index === items.length - 1 ? ' active' : ''}`}
            >
              {index === items.length - 1 ? (
                item.label
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
