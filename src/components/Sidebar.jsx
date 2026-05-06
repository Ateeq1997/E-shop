import React from 'react';

const Sidebar = () => {
  const categories = [
    { name: 'Lorem Ipsum', count: 83 },
    { name: 'Cras sagittis', count: 198 },
    { name: 'Vivamus', count: 95 },
    { name: 'Fusce vitae', count: 48 },
    { name: 'Vestibulum', count: 210 },
    { name: 'Proin phar', count: 78 },
  ];

  const brands = [
    { name: 'Nulla', count: 45 },
    { name: 'Curabitur', count: 34 },
    { name: 'Nunc', count: 67 },
    { name: 'Ullamcorper', count: 74 },
    { name: 'Fusce', count: 89 },
    { name: 'Sagittis', count: 28 },
  ];

  return (
    <>
      <div className="sidebar-widget category">
        <h2 className="title">Category</h2>
        <ul>
          {categories.map((cat, i) => (
            <li key={i}>
              <a href="#!">{cat.name}</a>
              <span>({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-widget image">
        <h2 className="title">Featured Product</h2>
        <a href="#!">
          <img src="/img/category-1.jpg" alt="Featured" />
        </a>
      </div>

      <div className="sidebar-widget brands">
        <h2 className="title">Our Brands</h2>
        <ul>
          {brands.map((brand, i) => (
            <li key={i}>
              <a href="#!">{brand.name}</a>
              <span>({brand.count})</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
