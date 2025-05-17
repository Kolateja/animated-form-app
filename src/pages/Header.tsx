import React, { useState } from "react";
import { Menu, Dropdown, Button, Drawer } from "antd";
import { Link } from "react-router-dom";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import "./Header.css";
import logo from '../assets/img/assignmnetJLogo.png';

const OthersMenu = (
  <Menu>
    <Menu.Item key="blog">
      <Link to="/blog">Blog</Link>
    </Menu.Item>
    <Menu.Item key="career">
      <Link to="/career">Career</Link>
    </Menu.Item>
    <Menu.Item key="samples">
      <Link to="/samples">Samples</Link>
    </Menu.Item>
    <Menu.Item key="membership">
      <Link to="/membership">Membership</Link>
    </Menu.Item>
  </Menu>
);

const groupedServices = [
  {
    title: "Writing",
    items: [
      "Assignment Help",
      "Academic Writing",
      "Homework Help",
      "Research Paper Writing Help",
      "Case Study Help",
      "Coursework Help",
      "Thesis Help",
      "Narrative Writing",
    ],
  },
  {
    title: "Problem Solving",
    items: [
      "Dissertation Help",
      "Statistical Analysis",
      "Proposal Writing Service",
      "Manuscript Writing Service",
      "Editing and Proofreading Service",
      "Essay Writing Service",
      "Practical Assignments Help",
      "Capstone Projects",
    ],
  },
  {
    title: "More Services",
    items: [
      "CDR Reports",
      "Write My Paper",
      "Lab Report",
      "Video Solutions",
      "Speech Writing",
      "Project Report Writing",
      "Take My Online Exam",
      "PowerPoint Presentation Service",
    ],
  },
];

const ServicesMenu = (
  <div className="services-dropdown-menu">
    {groupedServices.map((group) => (
      <div key={group.title} className="services-column">
        <strong className="services-title">{group.title}</strong>
        <ul className="services-list">
          {group.items.map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="services-link"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <header className="header-transparent-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="assignment-linkers-logo"
            className="img-fluid"
            width={120}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Menu mode="horizontal" selectable={false} className="menu-bar">
            <Menu.Item key="home"><Link to="/home">Home</Link></Menu.Item>
            <Menu.Item key="about"><Link to="/about">About Us</Link></Menu.Item>
            <Menu.Item key="services">
              <Dropdown overlay={ServicesMenu} trigger={["hover"]}>
                <a onClick={(e) => e.preventDefault()}>Services <DownOutlined /></a>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="contactus"><Link to="/contactus">Contact Us</Link></Menu.Item>
            <Menu.Item key="offers"><Link to="/offers">Offers</Link></Menu.Item>
            <Menu.Item key="reviews"><Link to="/reviews">Reviews</Link></Menu.Item>
            <Menu.Item key="login"><Link to="/auth/login-signup">Login/Signup</Link></Menu.Item>
            <Menu.Item key="others">
              <Dropdown overlay={OthersMenu}>
                <a onClick={(e) => e.preventDefault()}>Others <DownOutlined /></a>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="order">
              <Link to="/auth/login-signup">
                <Button type="primary">Order now</Button>
              </Link>
            </Menu.Item>
          </Menu>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon">
          <MenuOutlined onClick={showDrawer} />
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={visible}
          className="mobile-drawer"
        >
          <Menu mode="vertical" selectable={false}>
            <Menu.Item key="home"><Link to="/home">Home</Link></Menu.Item>
            <Menu.Item key="about"><Link to="/about">About Us</Link></Menu.Item>
            <Menu.SubMenu key="services" title="Services">
              {groupedServices.flatMap((group) =>
                group.items.map((item) => (
                  <Menu.Item key={item}>
                    <Link to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>
                      {item}
                    </Link>
                  </Menu.Item>
                ))
              )}
            </Menu.SubMenu>
            <Menu.Item key="contactus"><Link to="/contactus">Contact Us</Link></Menu.Item>
            <Menu.Item key="offers"><Link to="/offers">Offers</Link></Menu.Item>
            <Menu.Item key="reviews"><Link to="/reviews">Reviews</Link></Menu.Item>
            <Menu.Item key="login"><Link to="/auth/login-signup">Login/Signup</Link></Menu.Item>
            <Menu.SubMenu key="others" title="Others">
              <Menu.Item key="blog"><Link to="/blog">Blog</Link></Menu.Item>
              <Menu.Item key="career"><Link to="/career">Career</Link></Menu.Item>
              <Menu.Item key="samples"><Link to="/samples">Samples</Link></Menu.Item>
              <Menu.Item key="membership"><Link to="/membership">Membership</Link></Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="ordernow">
              <Link to="/auth/login-signup">
                <Button type="primary" block>Order now</Button>
              </Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
