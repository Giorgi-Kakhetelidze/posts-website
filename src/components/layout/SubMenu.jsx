import React from 'react';

const SubMenu = ({ items }) => {
  return (
    <div className="submenu">
      <ul className="submenu-list">
        {items.map((item, index) => (
          <li key={index} className="submenu-item">
            <a href="#">{item}</a>
            <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33334 7.7L4.66668 4.5L1.33334 1.3" stroke="black" strokeLinecap="square"/>
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;