import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar-links">
      {/* <ul>
        <li className={location.pathname === '/header' ? 'active' : ''}>
          <Link to="/header">Header</Link>
        </li>
        <li className={location.pathname === '/footer' ? 'active' : ''}>
          <Link to="/footer">Footer</Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
