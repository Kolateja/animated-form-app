// // src/components/Navbar.tsx
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../assets/logo.png';

// const Navbar = () => {
//   const location = useLocation();

//   return (
//     <div className="navbar">
//       <div className="navbar-logo">
//         <img src={logo} alt="Logo" />
//         <span className="navbar-brand">EduSphere</span>
//       </div>
//       <div className="navbar-links">
//         <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
//         <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
//        
//         <Link to="/subjects" className={location.pathname === '/subjects' ? 'active' : ''}>SubjectsTab</Link>




//         <div className="dropdown">
//           <span className="dropdown-toggle">More</span>
//           <div className="dropdown-content">
//             <Link to="/academicdetails">Academic Details</Link>
//             <Link to="/orderassignment">Order Assignment</Link>
//             <Link to="/raiseticket">Raise Ticket</Link>
//             <Link to="/changepassword">Change Password</Link>
//             <Link to="/adduser">Add User</Link>
//             <Link to="/createblog">Create Blog</Link>
//             <Link to="/sample">Create Sample</Link>
//             <Link to="/userslist">User Table</Link>
//             <Link to="/orderslist">Orders Table</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// src/components/Navbar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// import logo from '/assets/img/assignment-linkers-logo.png';
import './Navbar.css';
const Navbar = () => {
  const location = useLocation();

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/refundpolicy">Refund Policies</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/blog">Blog</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/career" className={location.pathname === '/career' ? 'active' : ''}>Career</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/samples">Samples</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/membership">Membership</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/assets/img/assignment-linkers-logo.png" alt="assignment-linkers-logo" width={100} height={80} />
          </Link>

        </div>

        <nav className="navbar-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/subjects" className={location.pathname === '/subjects' ? 'active' : ''}>Subjects</Link>
          <Link to="/contactus" className={location.pathname === '/contactus' ? 'active' : ''}>Contact Us</Link>
          <Link to="/offers" className={location.pathname === '/offers' ? 'active' : ''}>Offers</Link>
          <Link to="/reviews" className={location.pathname === '/reviews' ? 'active' : ''}>Reviews</Link>
          <Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link>
          <Link to="/terms" className={location.pathname === '/terms' ? 'active' : ''}>Ter</Link>
          <Link to="/whychooseus" className={location.pathname === '/whychooseus' ? 'active' : ''}>whychooseus</Link>



          <Link to="/auth/login-signup?mode=login" className={location.pathname === '/auth/login-signup' ? 'active' : ''}>
            Login / Signup
          </Link>

          <Dropdown overlay={menu}>
            <span className="dropdown-toggle">
              Others <DownOutlined />
            </span>
          </Dropdown>
        </nav>

        <div className="navbar-order-button">
          <Link to="/auth/login-signup?mode=login">
            <Button type="primary">Order now</Button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
